import { Navbar, Container, Form, Button, NavDropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import logoNavLogin from "../../../assets/virus.png";
import "./navbar-user-login.css";
import swal from "sweetalert";

const NavLoginUser = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    swal("You've Been Logged Out!");
    navigate("/");
  };

  return (
    <div className="nav-login-user shadow">
      <Navbar style={{ background: "#fff" }}>
        <Container>
          <Navbar.Brand href="#home" className="logo">
            <img src={logoNavLogin} width="30" height="35" className="d-inline-block align-top" alt="logo" />
          </Navbar.Brand>
          <Form className="d-flex search-input">
            <input type="text" style={{ borderRadius: "20px" }} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            {/* <Button class="btn btn-outline-success" type="submit"></Button> */}
          </Form>
          <NavDropdown title={<i className="bi bi-person-circle" style={{ fontSize: 25, color: "#5C7893" }}></i>} id="collasible-nav-dropdown" className="menu-user">
            <NavDropdown.Item onClick={() => navigate("/")}>Home</NavDropdown.Item>
            <NavDropdown.Item onClick={() => navigate("/user/profile")}>Profile</NavDropdown.Item>
            <NavDropdown.Item>History</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item onClick={() => logout()}>Logout</NavDropdown.Item>
          </NavDropdown>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavLoginUser;
