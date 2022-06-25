import { Checkbox } from "../Checkbox";
import styles from "./styles.module.scss";

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

interface TodoListProps {
  list: Todo[];
  onCheckTodo: (todoId: number, completed: boolean) => Promise<void>;
}

function TodoList({ list, onCheckTodo }: TodoListProps) {
  return (
    <div className={styles.container}>
      {list.map((todo) => (
        <div key={todo.id} className={styles.todoContainer}>
          <Checkbox todo={todo} onCheckTodo={onCheckTodo} />

          <strong>{todo.title}</strong>
        </div>
      ))}
    </div>
  );
}

export { TodoList };
