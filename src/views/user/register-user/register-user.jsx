import "./register-user.css";
import React from "react";
import { Form, Row, Col, Button, Spinner } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavUser from "../../components/navbar-user/navbar-user.jsx";
// import NavLoginUser from "../../navbar-user/navbar-user-login.jsx";
import logo from "../../../assets/virus.png";
import axios from "axios";
import swal from "sweetalert";
import ModalLogin from "../../components/modal-login/modal-login.jsx";

const RegisUser = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [modalLoginShow, setModalLoginShow] = React.useState(false);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    const online = window.navigator.onLine;
    event.preventDefault();
    const body = {
      name: username,
      email: email,
      password: password,
    };
    console.log(username, email, password);

    if (username.length == 0) {
      return swal("Username can not be blank");
    } else if (email.length == 0) {
      return swal("Email can not be blank");
    } else if (!email.includes("@")) {
      return swal("Please check your format Email");
    } else if (password.length == 0) {
      return swal("Password can not be blank");
    } else {
      setLoading(true);
      axios
        .post("https://weddingstories.space/register/users", body)
        .then((data) => {
          console.log(data, "success register");
          swal(data.data.message, "Now you can Login");
          setModalLoginShow(true);
          setUsername("");
          setPassword("");
          setEmail("");
        })
        .catch((err) => {
          if (online) {
            setModalLoginShow(true);
            <ModalLogin show={modalLoginShow} />;
            console.log(err.response.data.message, "error register");
            swal(err.response.data.message);
          } else {
            swal("Your Internet Offline");
          }
        })
        .finally(() => setLoading(false));
    }
  };

  if (loading) {
    return (
      <div className="loading d-flex justify-content-center align-items-center flex-column">
        <Spinner animation="border" />
      </div>
    );
  }

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
              <Form>
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

                <button className="button-submit mt-1 mb-4" type="submit" onClick={(event) => handleSubmit(event)}>
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
