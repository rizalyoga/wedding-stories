import React from "react";
import "./navbar-user.css";
import logo from "../../../assets/virus.png";
import ModalLogin from "../modal-login/modal-login.jsx";
import { useNavigate } from "react-router-dom";

const NavUser = () => {
  const [modalLoginShow, setModalLoginShow] = React.useState(false);
  const navigate = useNavigate();

  return (
    <div>
      <div className="nav-bar py-3 shadow">
        <div className="container d-flex justify-content-between">
          <div className="logo">
            <img src={logo} alt="logo" onClick={() => navigate("/")} />
          </div>
          <div className="search">
            <input style={{ textAlign: "center" }} type="text" placeholder="Search" />
          </div>
          <div className="nav-links">
            <ModalLogin show={modalLoginShow} onHide={() => setModalLoginShow(false)} />
            <a className="me-3 sign-in" href="#" onClick={() => setModalLoginShow(true)}>
              Sign In
            </a>
            <a className="sign-up" href="#" onClick={() => navigate("/registerUser")}>
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavUser;
