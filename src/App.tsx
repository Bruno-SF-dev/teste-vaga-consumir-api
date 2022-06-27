import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Header } from "./components/Header";
import { AppRoutes } from "./routes";
import "react-toastify/dist/ReactToastify.css";

import "./styles/global.module.scss";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppRoutes />
      <ToastContainer
        position="top-center"
        autoClose={3000}
        closeOnClick={true}
        theme="colored"
      />
    </BrowserRouter>
  );
}

export default App;
