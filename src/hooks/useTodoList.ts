import { useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../services/api";

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export function useTodoList() {
  const { userId } = useParams();
  const [todoList, setTodoList] = useState<Todo[]>([]);

  async function getUserTodo(userId: string | undefined) {
    const { data } = await api.get(`todos/?userId=${userId}`);

    setTodoList(data.reverse());
  }

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

  async function onAddTodo(title: string) {
    const idIncrement = todoList[0].id + 1;

    const newTodo = {
      userId: Number(userId),
      id: idIncrement,
      title,
      completed: false,
    };

    setTodoList([newTodo, ...todoList]);

    const { data } = await api.post(`/todos`, newTodo);
  }

  console.log(todoList);

  return {
    todoList,
    getUserTodo,
    onCheckTodo,
    onAddTodo,
  };
}
