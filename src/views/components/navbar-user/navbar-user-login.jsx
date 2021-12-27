import { Navbar, Container, Form, NavDropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import logoNavLogin from "../../../assets/virus-user.png";
import "./navbar-user-login.css";
import swal from "sweetalert";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import allStore from "../../../store/actions/index";

const NavLoginUser = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const logout = () => {
    localStorage.clear();
    swal("You've Been Logged Out!", { icon: "success", buttons: false, timer: 1000 });
    navigate("/");
  };

  const username = localStorage.nama;

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
    <div className="nav-login-user shadow">
      <Navbar style={{ background: "#fff" }} id="navigation-bar">
        <Container>
          <Navbar.Brand href="#home" className="logo-login-user">
            <img src={logoNavLogin} width="30" id="nav-logo-after-login" height="35" className="d-inline-block align-top" alt="logo" onClick={() => navigate("/")} />
          </Navbar.Brand>
          <Form className="d-flex search-input" onSubmit={submitHandler}>
            <input
              type="text"
              id="search-form-bef-login"
              style={{ borderRadius: "20px" }}
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              autoComplete="off"
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
              <i id="avatar-user" className="bi bi-person-circle" style={{ fontSize: 25, color: "#5C7893" }}>
                <a style={{ fontSize: "15px" }} className="name">
                  {" "}
                  {username}
                </a>
              </i>
            }
            id="collasible-nav-dropdown"
            className="menu-user"
          >
            <NavDropdown.Item id="home-menu-user" onClick={() => navigate("/")}>
              Home
            </NavDropdown.Item>
            <NavDropdown.Item id="profile-menu-user" onClick={() => navigate("/user/profile")}>
              Profile
            </NavDropdown.Item>
            <NavDropdown.Item id="history-menu-user" onClick={() => navigate("/user/history")}>
              History
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item id="logout-menu-user" onClick={() => logout()}>
              Logout
            </NavDropdown.Item>
          </NavDropdown>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavLoginUser;
