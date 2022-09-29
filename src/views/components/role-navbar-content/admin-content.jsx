import React from "react";
import "./navbar-admin.css";
import { NavDropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

const AdminContent = () => {
  const navigate = useNavigate();

  const logout = () => {
    sessionStorage.clear();
    swal("You've Been Logged Out!", {
      icon: "success",
      buttons: false,
      timer: 1000,
    });
    navigate("/");
  };

  return (
    <div>
      <NavDropdown
        title={
          <i
            id="avatar-user"
            className="bi bi-person-circle"
            style={{ fontSize: 25, color: "#5C7893" }}
          >
            <a href="https" className="name">
              Admin
            </a>
          </i>
        }
        id="collasible-nav-dropdown"
        className="menu-admin"
      >
        <NavDropdown.Item id="home-menu-admin" onClick={() => navigate("/")}>
          Home
        </NavDropdown.Item>
        <NavDropdown.Item
          id="home-menu-admin"
          onClick={() => navigate("/admin/dashboard/")}
        >
          Dashboard
        </NavDropdown.Item>
        <NavDropdown.Item id="logout-menu-admin" onClick={() => logout()}>
          Logout
        </NavDropdown.Item>
      </NavDropdown>
    </div>
  );
};

export default AdminContent;
