import "./admin-login.css";
import { Form } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavUser from "../../components/navbar-user/navbar-user.jsx";
import logo from "../../../assets/virus.png";
import swal from "sweetalert";

const AdminLogin = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    if (email == "admin@mail.com" && password == "admin") {
      localStorage.setItem("status", "admin");
      localStorage.setItem("token", "asdjlkasjdioqwlksaida");
      navigate("/admin/dashboard");
    } else {
      swal("Invalid Email / Password", { icon: "warning", timer: 5000, buttons: false });
    }
  };

  return (
    <>
      <NavUser />
      <div className="container pt-5 container-admin admin-login-page">
        <Form onSubmit={(e) => handleSubmit(e)}>
          {/* <MdAccountCircle className="reg-icon" style={{ color: "#046c91" }} /> */}
          {/* <h4 className="text-center mb-4">{logo}</h4> */}
          <div className="logo-admin">
            <img src={logo} alt="logo" />
          </div>
          <Form.Group>
            <Form.Control id="email-admin" className="p-2 mb-4 b-mid-signup email-admin " type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
          </Form.Group>
          <Form.Group className=" mb-4">
            <Form.Control id="password-admin" className="mb-1 p-2 b-top-signup" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
          </Form.Group>

          {/* <button className=" mb-1 p-2 btn-submit" type="submit">
          {loading && <Spinner animation="border" variant="light" />}
          {!loading && <span>Masuk</span>}
        </button> */}
          <button className=" mb-1 p-2 btn-submit-login text-white" type="submit">
            Sign In
          </button>
        </Form>
      </div>
    </>
  );
};

export default AdminLogin;
