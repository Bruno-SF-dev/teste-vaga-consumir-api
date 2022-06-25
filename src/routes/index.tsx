import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { UserTodo } from "../pages/UserTodo";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user/:userId" element={<UserTodo />} />
    </Routes>
  );
}

export { AppRoutes };
