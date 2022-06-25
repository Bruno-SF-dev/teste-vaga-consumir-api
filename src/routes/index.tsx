import { Route, Routes } from "react-router-dom";
import { TodoListContextProvider } from "../contexts/TodoListContext";
import { Home } from "../pages/Home";
import { User } from "../pages/User";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/user/:userId"
        element={
          <TodoListContextProvider>
            <User />
          </TodoListContextProvider>
        }
      />
    </Routes>
  );
}
