import "./register-user.css";
import React from "react";
import { Form, Row, Col, Button, Spinner } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import NavUser from "../../components/navbar-user/navbar-user.jsx";

import logo from "../../../assets/virus-2.png";
import axios from "axios";
import swal from "sweetalert";
import ModalLogin from "../../components/modal-login/modal-login.jsx";
import allStore from "../../../store/actions/index.js";
import Home from "../../home/before-login/index.jsx";

const RegisUser = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [modalLoginShow, setModalLoginShow] = React.useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    const online = window.navigator.onLine;
    event.preventDefault();
    const body = {
      name: username.replace(/\s+/g, ""),
      email: email.replace(/\s+/g, ""),
      password: password,
    };

    if (username.length === 0) {
      return swal("Username can not be blank", { icon: "warning" });
    } else if (email.length === 0) {
      return swal("Email can not be blank", { icon: "warning" });
    } else if (!email.includes("@") || !email.includes(".")) {
      return swal("Please check your format Email", { icon: "warning" });
    } else if (password.length < 8) {
      return swal("Password at least 8 characters", { icon: "warning" });
    } else if (password.includes(" ")) {
      return swal("Your Password Includes Space Character", {
        icon: "warning",
      });
    } else {
      // username.replace(/\s+/g, "");
      // email.replace(/\s+/g, "");

      setLoading(true);
      axios
        // .post("https://weddingstories.space/register/users", body)
        .get("https://jsonplaceholder.typicode.com/users/1/", body)
        .then((data) => {
          dispatch(allStore.UserLogin({ email, password }));

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
      <>
        <NavUser />
        <Spinner className="spinner" animation="border" />
      </>
    );
  }

  const showPassword = () => {
    const x = document.getElementById("form-password-user");
    if (x.type === "password") {
      x.type = "text";
      document.getElementById("togglePassword").style.color = "red";
    } else {
      x.type = "password";
      document.getElementById("togglePassword").style.color = "black";
    }
  };

  if (localStorage.token) {
    return <Home />;
  } else {
    return (
      <div className="body">
        <NavUser />
        {/* <NavLoginUser /> */}
        <div className="container body-register">
          <Row className="d-flex justify-content-center mb-5">
            <Col lg={5} md={5} sm={12} className="">
              <div className="logo-register text-center mb-1">
                <img
                  onClick={() => navigate("/")}
                  style={{ cursor: "pointer" }}
                  src={logo}
                  alt="logo"
                />
              </div>
              <p className="text-center text-white">
                Start your wedding preparations with the best offers & exclusive
                features in Wedding-Stories!
              </p>
              <div className="form-register">
                <Form>
                  <Row>
                    <div className="Room d-flex flex-column">
                      <div
                        className="mb-3 d-flex flex-column text-white"
                        controlId="username"
                      >
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                          className="input-register p-2"
                          id="form-username-user"
                          placeholder="username"
                          autoComplete="off"
                          value={username}
                          onChange={(event) => setUsername(event.target.value)}
                          required
                        />
                      </div>

                      <div
                        className="mb-3 d-flex flex-column text-white"
                        controlId="email"
                      >
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          className="input-register p-2"
                          id="form-email-user"
                          placeholder="Email"
                          type="email"
                          value={email}
                          autoComplete="off"
                          onChange={(event) => setEmail(event.target.value)}
                          required
                        />
                      </div>

                      <div
                        className="mb-3 d-flex flex-column text-white"
                        controlId="password"
                      >
                        <Form.Label>password</Form.Label>
                        <p className="d-flex justify-content-center align-items-center">
                          <Form.Control
                            style={{ marginLeft: "-2px" }}
                            id="form-password-user"
                            className="input-register  p-2"
                            placeholder="password"
                            type="password"
                            value={password}
                            onChange={(event) =>
                              setPassword(event.target.value)
                            }
                            required
                            autoComplete="off"
                          />
                          <i
                            style={{
                              marginLeft: "-20px",
                              color: "black",
                              cursor: "pointer",
                            }}
                            className="bi bi-eye-slash"
                            id="togglePassword"
                            onClick={() => showPassword()}
                          ></i>
                        </p>
                      </div>
                    </div>
                  </Row>

                  <button
                    className="button-submit mt-1 mb-4"
                    id="SignUp-user"
                    type="submit"
                    onClick={(event) => handleSubmit(event)}
                  >
                    Sign up
                  </button>
                  <hr style={{ color: "white" }} />
                  <div className="content-wo " style={{ marginLeft: "0px" }}>
                    {/* <h5 className="text-white">Sign up as Organizer</h5> */}
                    <Button
                      onClick={() => navigate("/vendor/register")}
                      id="redirect-signUp-wo"
                      style={{ background: "#84A1BE", borderColor: "#84A1BE" }}
                    >
                      Sign up as Organizer
                    </Button>
                    <hr style={{ color: "white" }} />
                    {/* <h5 className="text-white">Sign in as Organizer</h5> */}
                    <Button
                      onClick={() => navigate("/vendor/login")}
                      id="redirect-signIn-wo"
                      style={{ background: "#84A1BE", borderColor: "#84A1BE" }}
                    >
                      Sign in as Organizer
                    </Button>
                  </div>
                </Form>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
};

export default RegisUser;
