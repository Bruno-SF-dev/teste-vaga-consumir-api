import styles from "./styles.module.scss";

interface LoaderProps {
  small?: boolean;
}

export function Loader({ small = false }: LoaderProps) {
  const smallActive = small ? styles.small : "";

  return (
    <div className={`${styles.container} ${smallActive}`}>
      <div></div>
    </div>
  );
}
