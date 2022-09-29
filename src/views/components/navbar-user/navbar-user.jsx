import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import allStore from "../../../store/actions/index";

// Style
import "./navbar-user.css";

// Component
import { Form, Button } from "react-bootstrap";
import logo from "../../../assets/virus-user.png";
import NavbarLoginWo from "../navbar-wo/navbar-wo-login.jsx";
// import NavbarAdmin from "../navbar-admin/navbar-admin.jsx";
import CustomerLoginContent from "../role-navbar-content/customer-login-content";
import AdminContent from "../role-navbar-content/admin-content";
import BeforeLoginContent from "../role-navbar-content/berfore-login-content";
import swal from "sweetalert";

const NavUser = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [term, setTerm] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    // const newTerm = term.replace(/\s+/g, " ".trim());
    const newTerm = term;
    if (newTerm === "") {
      swal("Please Input Keyword", {
        buttons: false,
        icon: "warning",
        timer: 1000,
      });
    } else {
      dispatch(allStore.getSearchPackage(newTerm));
      navigate("/search/package");
    }
  };

  const contentRole = () => {
    if (sessionStorage.token && sessionStorage.status === "user") {
      return <CustomerLoginContent />;
    } else if (sessionStorage.token && sessionStorage.status === "organizer") {
      return <NavbarLoginWo />;
    } else if (sessionStorage.status === "admin") {
      return <AdminContent />;
    } else {
      return <BeforeLoginContent />;
    }
  };

  return (
    <div>
      <div className="nav-bar py-3 shadow">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="logo">
            <img
              src={logo}
              alt="logo"
              id="navbar-logo-bef-login"
              onClick={() => navigate("/")}
            />
          </div>
          <Form className="search-input-user" onSubmit={submitHandler}>
            <input
              type="text"
              style={{ borderRadius: "20px" }}
              autoComplete="off"
              id="search-form-bef-login"
              className="form-control me-2"
              placeholder="Search"
              aria-label="Search"
              value={term}
              onChange={(e) => setTerm(e.target.value)}
            />

            <Button
              variant="primary"
              id="search-button"
              type="submit"
              style={{
                borderRadius: "50%",
                background: "#5C7893",
                border: "#5C7893",
              }}
            >
              <i className="bi bi-search"></i>
            </Button>
          </Form>
          {contentRole()}
        </div>
      </div>
    </div>
  );
};

export default NavUser;
