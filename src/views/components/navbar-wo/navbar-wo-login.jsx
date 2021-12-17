import { Navbar, Container, Form, Button, NavDropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import logoNavLogin from "../../../assets/virus.png";
import swal from "sweetalert";
import "./navbar-wo-login.css";

const NavLoginWo = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    localStorage.removeItem("name");
    localStorage.removeItem("role");
    swal("You've Been Logged Out!");
    navigate("/");
  };

  return (
    <div className="nav-login-wo shadow">
      <Navbar style={{ background: "#fff" }}>
        <Container>
          <Navbar.Brand href="#home" className="logo">
            <img
              onClick={() => navigate("/")}
              src={logoNavLogin}
              width="30"
              height="35"
              className="d-inline-block align-top"
              alt="logo"
              id="nav-logo-after-login"
            />
          </Navbar.Brand>
          <Form className="d-flex search-input">
            <input
              type="text"
              id="search-form-after-login"
              style={{ borderRadius: "20px" }}
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            {/* <Button class="btn btn-outline-success" type="submit"></Button> */}
          </Form>
          <NavDropdown
            title={
              <i
                id="avatar-wo"
                className="bi bi-person-circle"
                style={{ fontSize: 25, color: "#5C7893" }}
              ></i>
            }
            id="collasible-nav-dropdown"
            className="menu-wo"
          >
            <NavDropdown.Item id="home-menu-wo" onClick={() => navigate("/")}>
              Home
            </NavDropdown.Item>
            <NavDropdown.Item
              id="profile-menu-wo"
              onClick={() => navigate("/vendor/profile")}
            >
              Profile
            </NavDropdown.Item>
            <NavDropdown.Item
              id="packages-menu-wo"
              onClick={() => navigate("/vendor/packages")}
            >
              Packages
            </NavDropdown.Item>
            <NavDropdown.Item
              id="listOrder-menu-wo"
              onClick={() => navigate("/vendor/reservations")}
            >
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
