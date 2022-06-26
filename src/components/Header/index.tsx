import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

export function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <Link to="/">
          <h2>
            Consumir API - <span>TODO</span>
          </h2>
        </Link>
      </div>
    </header>
  );
}
