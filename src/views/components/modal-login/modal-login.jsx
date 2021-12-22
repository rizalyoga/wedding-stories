import { useState, useEffect } from "react";
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
  // const route = useSelector(({ route }) => route);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("1.masuk Handle Submit");
    dispatch(allStore.UserLogin({ email, password }));
  };

  // useEffect(() => {
  //   if (localStorage) {
  //     navigate(route);
  //   }
  // }, [route]);

  if (loading) {
    // console.log("inilagi loading");
    return (
      <div className="loading d-flex justify-content-center align-items-center flex-column">
        <Spinner animation="border" />
      </div>
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
    <Modal {...props} size="md" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton></Modal.Header>
      <div className="form-container sign-in-container rounded">
        <Modal.Body>
          {/* <h5 className="mb-3 fw-bolder" style={{ textAlign: "center" }}>
            Masuk
          </h5> */}
          <Form onSubmit={(event) => handleSubmit(event)} className="input-login ">
            {/* <Form.Label className="mb-0 label-login">Email</Form.Label> */}
            <input type="email" id="form-input-email-user" autoComplete="off" a placeholder="E-mail" value={email} onChange={(event) => setEmail(event.target.value)} required />
            {/* <Form.Label className="mb-0 label-login">Password</Form.Label> */}
            <input type="password" id="form-input-pass-user" placeholder="Password" autoComplete="off" value={password} onChange={(event) => setPassword(event.target.value)} required />
            <i style={{ marginLeft: "-20px", color: "#bdbdbd", cursor: "pointer" }} className="bi bi-eye-slash" id="togglePassword" onClick={() => showPassword()}></i>
            <br />
            <span></span>
            <Button className="mt-3 submit-login " id="signIn-user" type="submit">
              sign in
            </Button>
            <p className="pt-4">
              Don't have an acount ?{" "}
              <a style={{ color: "#fff", cursor: "pointer" }} id="redirect-regis-user-page" onClick={() => navigate("/user/register")}>
                sign up
              </a>
            </p>
          </Form>
          <hr style={{ color: "white" }} />
          <h6 className="text-white">Sign up as organizer</h6>
          <Button onClick={() => navigate("/vendor/register")} id="redirect-signUp-wo-page" size="sm" style={{ background: "#84A1BE", borderColor: "#84A1BE", width: "100%", borderRadius: "20px" }}>
            sign up
          </Button>
          <hr style={{ color: "white" }} />
          <h6 className="text-white">Sign in as organizer</h6>
          <Button onClick={() => navigate("/vendor/login")} id="redirect-signIn-wo-page" size="sm" style={{ background: "#84A1BE", borderColor: "#84A1BE", width: "100%", borderRadius: "20px", marginBottom: "10px" }}>
            sign in
          </Button>
        </Modal.Body>
      </div>
    </Modal>
  );
};

export default ModalLogin;
