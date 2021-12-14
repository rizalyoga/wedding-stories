import "./register-user.css";
import { Form, Row, Col, Button } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavUser from "../../components/navbar-user/navbar-user.jsx";
// import NavLoginUser from "../../navbar-user/navbar-user-login.jsx";
import logo from "../../../assets/virus.png";

const RegisUser = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = () => {};

  const showPassword = () => {
    const x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
      document.getElementById("togglePassword").style.color = "red";
    } else {
      x.type = "password";
      document.getElementById("togglePassword").style.color = "black";
    }
  };

  return (
    <div className="body">
      <NavUser />
      {/* <NavLoginUser /> */}
      <div className="container body-register">
        <Row className="d-flex justify-content-center mb-5">
          <Col lg={5} md={5} sm={12} className="">
            <div className="logo-register text-center mb-4">
              <img onClick={() => navigate("/")} style={{ width: "60px", cursor: "pointer" }} src={logo} alt="logo" />
            </div>
            <p className="text-center">Mulai persiapan pernikahan Anda dengan penawaran terbaik & fitur eksklusif di Wedding-Day!</p>
            <div className="form-register">
              <Form onSubmit={(event) => handleSubmit(event)}>
                <Row>
                  <div className="Room d-flex flex-column">
                    <div className="mb-3 d-flex flex-column text-white" controlId="username">
                      <Form.Label>Username</Form.Label>
                      <Form.Control className="input-register" placeholder="username" autoComplete="off" value={username} onChange={(event) => setUsername(event.target.value)} required />
                    </div>

                    <div className="mb-3 d-flex flex-column text-white" controlId="email">
                      <Form.Label>Email</Form.Label>
                      <Form.Control className="input-register" placeholder="Email" type="email" value={email} autoComplete="off" onChange={(event) => setEmail(event.target.value)} required />
                    </div>

                    <div className="mb-3 d-flex flex-column text-white" controlId="password">
                      <Form.Label>password</Form.Label>
                      <p className="d-flex justify-content-center align-items-center">
                        <Form.Control
                          style={{ marginLeft: "-2px" }}
                          id="password"
                          className="input-register "
                          placeholder="password"
                          type="password"
                          value={password}
                          onChange={(event) => setPassword(event.target.value)}
                          required
                          autoComplete="off"
                        />
                        <i style={{ marginLeft: "-20px", color: "black", cursor: "pointer" }} className="bi bi-eye-slash" id="togglePassword" onClick={() => showPassword()}></i>
                      </p>
                    </div>
                  </div>
                </Row>

                <button className="button-submit mt-1 mb-4" type="submit">
                  Daftar
                </button>
                <hr style={{ color: "white" }} />
                <div className="content-wo ">
                  <h5 className="text-white">Ingin mendaftar sebagai WO ?</h5>
                  <Button onClick={() => navigate("/vendor/register")} style={{ background: "#84A1BE", borderColor: "#84A1BE" }}>
                    Daftar ?
                  </Button>
                  <hr style={{ color: "white" }} />
                  <h5 className="text-white">Masuk Sebagai WO ?</h5>
                  <Button onClick={() => navigate("/vendor/login")} style={{ background: "#84A1BE", borderColor: "#84A1BE" }}>
                    Masuk ?
                  </Button>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default RegisUser;
