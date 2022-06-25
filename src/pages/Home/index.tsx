import { UserList } from "../../components/UserList";

import commonStyles from "../../styles/pageCommon.module.scss";

function Home() {
  return (
    <main className={commonStyles.container}>
      <UserList />
    </main>
  );
}

export { Home };
