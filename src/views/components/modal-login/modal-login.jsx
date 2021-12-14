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
  const route = useSelector(({ route }) => route);

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
    console.log("inilagi loading");
    return (
      <div className="loading d-flex justify-content-center align-items-center flex-column">
        <Spinner animation="border" />
      </div>
    );
  }

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
            <input type="email" placeholder="E-mail" value={email} onChange={(event) => setEmail(event.target.value)} required />
            {/* <Form.Label className="mb-0 label-login">Password</Form.Label> */}
            <input type="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)} required />
            <br />
            <span></span>
            <Button className="mt-3 submit-login " type="submit">
              Masuk
            </Button>
            <p className="pt-4">
              Belum punya akun ?{" "}
              <a style={{ color: "#fff", cursor: "pointer" }} onClick={() => navigate("/user/register")}>
                Daftar
              </a>
            </p>
          </Form>
          <hr style={{ color: "white" }} />
          <h6 className="text-white">Daftar sebagai WO ?</h6>
          <Button onClick={() => navigate("/vendor/register")} size="sm" style={{ background: "#84A1BE", borderColor: "#84A1BE", width: "100%", borderRadius: "20px" }}>
            Daftar
          </Button>
          <hr style={{ color: "white" }} />
          <h6 className="text-white">Masuk Sebagai WO ?</h6>
          <Button onClick={() => navigate("/vendor/login")} size="sm" style={{ background: "#84A1BE", borderColor: "#84A1BE", width: "100%", borderRadius: "20px", marginBottom: "10px" }}>
            Masuk
          </Button>
        </Modal.Body>
      </div>
    </Modal>
  );
};

export default ModalLogin;
