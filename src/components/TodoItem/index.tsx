import { Checkbox } from "../Checkbox";
import styles from "./styles.module.scss";

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

interface TodoItemProps {
  todo: Todo;
}

export function TodoItem({ todo }: TodoItemProps) {
  return (
    <div className={styles.todoContainer}>
      <Checkbox todo={todo} />
      <strong>{todo.title}</strong>
    </div>
  );
}
