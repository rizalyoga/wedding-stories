import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./views/home/before-login/index.jsx";
import Footer from "./views/components/footer/footer.jsx";
import RegisterUser from "./views/user/register-user/register-user.jsx";
import RegisterWO from "./views/weddingOrganizer/register/register-wo";
import LoginWO from "./views/weddingOrganizer/login/login-wo";
import ProfileWO from "./views/weddingOrganizer/profile/profile-wo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/user/register" element={<RegisterUser />} />
        <Route path="/vendor/register" element={<RegisterWO />}></Route>
        <Route path="/vendor/login" element={<LoginWO />}></Route>
        <Route path="/vendor/profile" element={<ProfileWO />}></Route>
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
