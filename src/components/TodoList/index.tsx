import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { TodoListContext } from "../../contexts/TodoListContext";
import { TodoItem } from "../TodoItem";

import styles from "./styles.module.scss";

export function TodoList() {
  const { userId } = useParams();
  const { todoList, getUserTodo } = useContext(TodoListContext);

  useEffect(() => {
    getUserTodo(userId);
  }, []);

  return (
    <div className={styles.container}>
      {todoList.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}
