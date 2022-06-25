import styles from "./styles.module.scss";

interface HeaderUserProps {
  name: string;
}

export function HeaderUser({ name }: HeaderUserProps) {
  return (
    <header className={styles.container}>
      <span>
        Usuário: <strong>{name}</strong>
      </span>
    </header>
  );
}
