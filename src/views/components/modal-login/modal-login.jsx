import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Spinner } from "react-bootstrap";
import "./modal-login.css";
import allStore from "../../../store/actions/index";

const ModalLogin = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loading = useSelector(({ loading }) => loading);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(allStore.UserLogin({ email, password }));
  };

  if (loading) {
    return (
      <>
        <div className="loading">
          <Spinner className="spinner" animation="border" />
        </div>
      </>
    );
  }

  /* ------------------------------ SHOW PASSWORD ----------------------------- */
  const showPassword = () => {
    const x = document.getElementById("form-input-pass-user");
    if (x.type === "password") {
      x.type = "text";
      document.getElementById("togglePassword").style.color = "red";
    } else {
      x.type = "password";
      document.getElementById("togglePassword").style.color = "#bdbdbd";
    }
  };

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton></Modal.Header>
      <div className="form-container sign-in-container rounded">
        <Modal.Body>
          <Form
            onSubmit={(event) => handleSubmit(event)}
            className="input-login "
          >
            <input
              type="email"
              id="form-input-email-user"
              autoComplete="off"
              a
              placeholder="E-mail"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />

            <input
              type="password"
              id="form-input-pass-user"
              placeholder="Password"
              autoComplete="off"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
            <i
              style={{
                marginLeft: "-20px",
                color: "#bdbdbd",
                cursor: "pointer",
              }}
              className="bi bi-eye-slash"
              id="togglePassword"
              onClick={() => showPassword()}
            ></i>
            <br />
            <span></span>
            <Button
              className="mt-3 submit-login "
              id="signIn-user"
              type="submit"
            >
              sign in
            </Button>
            <p className="pt-4">
              Don't have an acount ?
              <a
                id="redirect-regis-user-page"
                onClick={() => navigate("/user/register")}
                href
              >
                {`  Sign up`}
              </a>
            </p>
          </Form>
          <hr style={{ color: "white" }} />

          <Button
            onClick={() => navigate("/vendor/register")}
            id="redirect-signUp-wo-page"
            size="sm"
          >
            Sign up as organizer
          </Button>
          <hr style={{ color: "white" }} />

          <Button
            onClick={() => navigate("/vendor/login")}
            id="redirect-signIn-wo-page"
            size="sm mb-4"
          >
            Sign in as organizer
          </Button>
        </Modal.Body>
      </div>
    </Modal>
  );
};

export default ModalLogin;
