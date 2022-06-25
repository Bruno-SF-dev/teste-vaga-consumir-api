import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";

import { HeaderUser } from "../../components/HeaderUser";
import { TodoList } from "../../components/TodoList";

import commonStyles from "../../styles/pageCommon.module.scss";

interface User {
  userId: string;
  name: string;
  email: string;
}

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

function UserTodo() {
  const { userId } = useParams();

  const [user, setUser] = useState<User>({} as User);
  const [todoList, setTodoList] = useState<Todo[]>([]);

  useEffect(() => {
    async function getUserData() {
      const { data: user } = await api.get(`/users/${userId}`);
      const { data: todos } = await api.get(`todos/?userId=${userId}`);

      const userFormatted = {
        userId: user.id,
        name: user.name,
        email: user.email,
      };

      setUser(userFormatted);
      setTodoList(todos);
    }

    getUserData();
  }, []);

  async function onCheckTodo(todoId: number, completed: boolean) {
    const todoSelected = todoList.find((todo) => todo.id === todoId);

    const todoListUpdated = todoList.map((todo) => {
      if (todo.id === todoId) {
        return {
          ...todo,
          completed,
        };
      }

      return todo;
    });

    setTodoList(todoListUpdated);

    const { data } = await api.put(`/todos/${todoId}`, {
      ...todoSelected,
      completed,
    });
  }

  if (!user.name) {
    return <p>Carregando...</p>;
  }

  return (
    <main className={commonStyles.container}>
      <HeaderUser name={user.name} todoLength={todoList.length} />
      <TodoList list={todoList} onCheckTodo={onCheckTodo} />
    </main>
  );
}

export { UserTodo };
