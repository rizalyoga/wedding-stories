import { Navbar, Container, Form, Button, NavDropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import logoNavLogin from "../../../assets/virus.png";
import swal from "sweetalert";
import "./navbar-wo-login.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import allStore from "../../../store/actions/index";

const NavLoginWo = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    localStorage.removeItem("name");
    localStorage.removeItem("status");
    swal("You've Been Logged Out!", { icon: "success", buttons: false, timer: 1000 });
    navigate("/");
  };

  const username = localStorage.name;

  const dispatch = useDispatch();

  const [term, setTerm] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    // const newTerm = term.replace(/\s+/g, " ".trim());
    const newTerm = term;
    if (newTerm === "") {
      swal("Please Input Keyword", { buttons: false, icon: "warning", timer: 500 });
    } else {
      console.log(newTerm);
      dispatch(allStore.getSearchPackage(newTerm));
      navigate("/search/package");
    }
  };

  return (
    <div className="nav-login-wo shadow">
      <Navbar style={{ background: "#fff" }}>
        <Container>
          <Navbar.Brand href="#home" className="logo">
            <img onClick={() => navigate("/")} src={logoNavLogin} width="30" height="35" className="d-inline-block align-top" alt="logo" id="nav-logo-after-login" />
          </Navbar.Brand>
          <Form className="d-flex search-input" onSubmit={submitHandler}>
            <input
              type="text"
              id="search-form-after-login"
              style={{ borderRadius: "20px" }}
              className="form-control me-2"
              type="search"
              autoComplete="off"
              placeholder="Search"
              aria-label="Search"
              value={term}
              onChange={(e) => setTerm(e.target.value)}
            />
            {/* <Button class="btn btn-outline-success" type="submit"></Button> */}
            <Button id="search-button" variant="primary" type="submit" style={{ borderRadius: "50%", background: "#5C7893", border: "#5C7893" }}>
              <i class="bi bi-search"></i>
            </Button>
          </Form>
          <NavDropdown
            title={
              <i id="avatar-wo" className="bi bi-person-circle" style={{ fontSize: 25, color: "#5C7893" }}>
                <a style={{ fontSize: "15px" }} className="name">
                  {" "}
                  {username}
                </a>
              </i>
            }
            id="collasible-nav-dropdown"
            className="menu-wo"
          >
            <NavDropdown.Item id="home-menu-wo" onClick={() => navigate("/")}>
              Home
            </NavDropdown.Item>
            <NavDropdown.Item id="profile-menu-wo" onClick={() => navigate("/vendor/profile")}>
              Profile
            </NavDropdown.Item>
            <NavDropdown.Item id="packages-menu-wo" onClick={() => navigate("/vendor/packages")}>
              My Packages
            </NavDropdown.Item>
            <NavDropdown.Item id="listOrder-menu-wo" onClick={() => navigate("/vendor/reservations")}>
              Order List
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item id="logout-menu-wo" onClick={() => logout()}>
              Logout
            </NavDropdown.Item>
          </NavDropdown>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavLoginWo;
