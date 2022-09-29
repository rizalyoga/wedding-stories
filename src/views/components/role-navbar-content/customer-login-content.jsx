import React from "react";
import "./navbar-user-login.css";
import { useNavigate } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";
import swal from "sweetalert";

const CustomerLoginContent = () => {
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

  const username = sessionStorage.nama.split(" ");

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
              {`  ${username[0]}`}
            </a>
          </i>
        }
        id="collasible-nav-dropdown"
        className="menu-user"
      >
        <NavDropdown.Item id="home-menu-user" onClick={() => navigate("/")}>
          Home
        </NavDropdown.Item>
        <NavDropdown.Item
          id="profile-menu-user"
          onClick={() => navigate("/user/profile")}
        >
          Profile
        </NavDropdown.Item>
        <NavDropdown.Item
          id="history-menu-user"
          onClick={() => navigate("/user/history")}
        >
          History
        </NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item id="logout-menu-user" onClick={() => logout()}>
          Logout
        </NavDropdown.Item>
      </NavDropdown>
    </div>
  );
};

export default CustomerLoginContent;
