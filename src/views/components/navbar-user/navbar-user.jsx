import React from "react";
import { useState } from "react";
import "./navbar-user.css";
import logo from "../../../assets/virus.png";
import ModalLogin from "../modal-login/modal-login.jsx";
import { useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import NavbarLoginUser from "./navbar-user-login.jsx";
import NavbarLoginWo from "../navbar-wo/navbar-wo-login.jsx";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import allStore from "../../../store/actions/index";
import swal from "sweetalert";

const NavUser = () => {
  const [modalLoginShow, setModalLoginShow] = React.useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [term, setTerm] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const newTerm = term.replace(/\s+/g, " ".trim());
    if (newTerm === "") {
      swal("Please Input Keyword", { buttons: false, icon: "warning", timer: 500 });
    } else {
      // console.log(term);
      dispatch(allStore.getSearchPackage(newTerm));
      navigate("/search/package");
      setTerm("");
    }
  };

  if (localStorage.token && localStorage.status == "User") {
    return <NavbarLoginUser />;
  } else if (localStorage.token && localStorage.status == "organizer") {
    return <NavbarLoginWo />;
  } else {
    return (
      <div>
        <div className="nav-bar py-3 shadow">
          <div className="container d-flex justify-content-between">
            <div className="logo">
              <img src={logo} alt="logo" id="navbar-logo-bef-login" onClick={() => navigate("/")} />
            </div>
            <Form className="d-flex search-input" onSubmit={submitHandler}>
              <input
                type="text"
                style={{ borderRadius: "20px" }}
                autoComplete="off"
                id="search-form-bef-login"
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={term}
                onChange={(e) => setTerm(e.target.value)}
              />
              {/* <Button class="btn btn-outline-success" type="submit"></Button> */}
              <Button variant="primary" type="submit" style={{ borderRadius: "50%", background: "#5C7893", border: "#5C7893" }}>
                <i class="bi bi-search"></i>
              </Button>
            </Form>
            <div className="nav-links mt-2">
              <ModalLogin show={modalLoginShow} onHide={() => setModalLoginShow(false)} />
              <a className="sign-in" href="#" id="signIn-button-user" onClick={() => setModalLoginShow(true)}>
                Masuk
              </a>
              <a className="sign-up" href="#" id="signUp-button-user" onClick={() => navigate("/user/register")}>
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
