import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";

import { FormAddTodo } from "../../components/FormAddTodo";
import { HeaderUser } from "../../components/HeaderUser";
import { TodoList } from "../../components/TodoList";

import commonStyles from "../../styles/pageCommon.module.scss";
import { Loader } from "../../components/Loader";

interface User {
  name: string;
}

export function User() {
  const { userId } = useParams();

  const [user, setUser] = useState<User>({} as User);
  const [isLoading, setIsLoading] = useState(true);
  const [userNotFound, setUserNotFound] = useState(false);

  useEffect(() => {
    async function getUserData() {
      try {
        const { data: user } = await api.get(`/users/${userId}`);

        setUser(user);
      } catch {
        setUserNotFound(true);
      } finally {
        setIsLoading(false);
      }
    }

    getUserData();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  if (userNotFound) {
    return <div style={{ textAlign: "center" }}>Usuário encontrado.</div>;
  }

  return (
    <main className={commonStyles.container}>
      <HeaderUser name={user.name} />
      <FormAddTodo />
      <TodoList />
    </main>
  );
}
