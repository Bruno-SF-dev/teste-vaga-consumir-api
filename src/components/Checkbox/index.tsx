import { useContext } from "react";
import { TodoListContext } from "../../contexts/TodoListContext";

import styles from "./styles.module.scss";

interface CheckboxProps {
  todo: {
    id: number;
    completed: boolean;
  };
}

export function Checkbox({ todo }: CheckboxProps) {
  const { onCheckTodo } = useContext(TodoListContext);

  return (
    <div className={styles.container}>
      <label>
        <input
          hidden
          type="checkbox"
          checked={todo.completed}
          onChange={() => onCheckTodo(todo.id, !todo.completed)}
        />
        <div />
      </label>
    </div>
  );
}
