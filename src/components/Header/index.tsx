import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

function Header() {
  return (
    <header className={styles.container}>
      <Link to="/">
        <h2>Consumir API</h2>
      </Link>
    </header>
  );
}

export { Header };
