import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./modal-login.css";

const ModalLogin = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = () => {};

  return (
    <Modal {...props} size="md" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton></Modal.Header>
      <div className="form-container sign-in-container rounded">
        <Modal.Body>
          <h5 className="mb-3 fw-bolder" style={{ textAlign: "center" }}>
            Masuk
          </h5>
          <Form onSubmit={(event) => handleSubmit(event)}>
            {/* <Form.Label className="mb-0 label-login">Email</Form.Label> */}
            <input className="input-login " type="email" placeholder="Input your email" value={email} onChange={(event) => setEmail(event.target.value)} required />
            {/* <Form.Label className="mb-0 label-login">Password</Form.Label> */}
            <input className="input-login " type="password" placeholder="password" value={password} onChange={(event) => setPassword(event.target.value)} required />
            <br />
            <span></span>
            <Button className="mt-3 submit-login " type="submit">
              Sign In
            </Button>
            <p className="pt-5">
              Belum punya akun ?{" "}
              <a style={{ color: "#fff", cursor: "pointer" }} onClick={() => navigate("/registerUser")}>
                Daftar
              </a>
            </p>
          </Form>
        </Modal.Body>
      </div>
    </Modal>
  );
};

export default ModalLogin;
