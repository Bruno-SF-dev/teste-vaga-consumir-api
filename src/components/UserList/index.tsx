import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../../services/api";
import { Loader } from "../Loader";

import styles from "./styles.module.scss";

interface User {
  userId: string;
  name: string;
  email: string;
}

export function UserList() {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [failedReq, setFailedReq] = useState(false);

  useEffect(() => {
    async function getUsers() {
      try {
        const res = await api.get("/users");

        const usersFormatted = res.data.map((user: any) => ({
          userId: user.id,
          name: user.name,
          email: user.email,
        }));

        setUsers(usersFormatted);
      } catch {
        setFailedReq(true);
      } finally {
        setIsLoading(false);
      }
    }

    getUsers();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  if (failedReq) {
    return (
      <div style={{ textAlign: "center" }}>
        Não foi possível buscar os usuários.
      </div>
    );
  }

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
