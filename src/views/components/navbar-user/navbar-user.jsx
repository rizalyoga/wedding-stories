import React from "react";
import "./navbar-user.css";
import logo from "../../../assets/virus.png";
import ModalLogin from "../modal-login/modal-login.jsx";
import { useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import NavbarLoginUser from "./navbar-user-login.jsx";

const NavUser = () => {
  const [modalLoginShow, setModalLoginShow] = React.useState(false);
  const navigate = useNavigate();

  if (localStorage.token) {
    return <NavbarLoginUser />;
  } else {
    return (
      <div>
        <div className="nav-bar py-3 shadow">
          <div className="container d-flex justify-content-between">
            <div className="logo">
              <img src={logo} alt="logo" onClick={() => navigate("/")} />
            </div>
            <Form className="d-flex search-input">
              <input type="text" style={{ borderRadius: "20px" }} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              {/* <Button class="btn btn-outline-success" type="submit"></Button> */}
            </Form>
            <div className="nav-links mt-2">
              <ModalLogin show={modalLoginShow} onHide={() => setModalLoginShow(false)} />
              <a className="sign-in" href="#" onClick={() => setModalLoginShow(true)}>
                Masuk
              </a>
              <a className="sign-up" href="#" onClick={() => navigate("/user/register")}>
                Daftar
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default NavUser;
