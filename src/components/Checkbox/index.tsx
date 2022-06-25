import styles from "./styles.module.scss";

interface CheckboxProps {
  todo: {
    id: number;
    completed: boolean;
  };
  onCheckTodo: (todoId: number, completed: boolean) => Promise<void>;
}

function Checkbox({ todo, onCheckTodo }: CheckboxProps) {
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

export { Checkbox };
