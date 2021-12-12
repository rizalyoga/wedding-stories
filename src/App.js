import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import RegisterWO from "./views/weddingOrganizer/register/register-wo";
import LoginWO from "./views/weddingOrganizer/login/login-wo";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/vendor/register" element={<RegisterWO />}></Route>
          <Route path="/vendor/login" element={<LoginWO />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
