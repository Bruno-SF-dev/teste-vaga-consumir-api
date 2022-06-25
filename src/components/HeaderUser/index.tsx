import styles from "./styles.module.scss";

interface HeaderUserProps {
  name: string;
  todoLength: number;
}

function HeaderUser({ name, todoLength }: HeaderUserProps) {
  return (
    <header className={styles.container}>
      <span>
        Usuário: <strong>{name}</strong>
      </span>
      <span>
        Tarefas: <strong>{todoLength}</strong>
      </span>
    </header>
  );
}

export { HeaderUser };
