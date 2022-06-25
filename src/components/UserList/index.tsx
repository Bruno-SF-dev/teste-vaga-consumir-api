import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../../services/api";

import styles from "./styles.module.scss";

interface User {
  userId: string;
  name: string;
  email: string;
}

function UserList() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    async function getUsers() {
      const res = await api.get("/users");

      const usersFormatted = res.data.map((user: any) => ({
        userId: user.id,
        name: user.name,
        email: user.email,
      }));

      setUsers(usersFormatted);
    }

    getUsers();
  }, []);

  return (
    <div>
      <header className={styles.tableHeader}>
        <span>Usuário</span>
        <span>Email</span>
      </header>

      {users && (
        <div className={styles.tableBody}>
          {users.map((user) => (
            <Link
              className={styles.tableRow}
              to={`user/${user.userId}`}
              key={user.userId}
            >
              <span>{user.name}</span>
              <span>{user.email}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export { UserList };
