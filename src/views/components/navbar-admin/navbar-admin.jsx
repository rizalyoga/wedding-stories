import "./navbar-admin.css";
import { Navbar, Container, Form, NavDropdown, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import allStore from "../../../store/actions/index";
import logoNavLogin from "../../../assets/virus-user.png";
import swal from "sweetalert";

const NavAdmin = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const logout = () => {
    localStorage.clear();
    swal("You've Been Logged Out!", { icon: "success", buttons: false, timer: 1000 });
    navigate("/");
  };

  // const username = localStorage.nama;

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
    <div className="nav-login-admin shadow">
      <Navbar style={{ background: "#fff" }} id="navigation-bar">
        <Container>
          <Navbar.Brand href="#home" className="logo-login-admin">
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
            <Button variant="primary" type="submit" id="search-button" style={{ borderRadius: "50%", background: "#5C7893", border: "#5C7893" }}>
              <i class="bi bi-search"></i>
            </Button>
          </Form>
          <NavDropdown
            title={
              <i id="avatar-user" className="bi bi-person-circle" style={{ fontSize: 25, color: "#5C7893" }}>
                <a style={{ fontSize: "15px" }} className="name">
                  {" "}
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
            <NavDropdown.Item id="home-menu-admin" onClick={() => navigate("/admin/dashboard/")}>
              Dashboard
            </NavDropdown.Item>
            <NavDropdown.Item id="logout-menu-admin" onClick={() => logout()}>
              Logout
            </NavDropdown.Item>
          </NavDropdown>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavAdmin;
