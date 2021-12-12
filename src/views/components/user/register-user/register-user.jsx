import "./register-user.css";
import { Form, Row, Col, Button } from "react-bootstrap";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import NavUser from "../../navbar-user/navbar-user.jsx";
// import NavLoginUser from "../../navbar-user/navbar-user-login.jsx";
import logo from "../../../../assets/virus.png";

const RegisUser = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {};

  return (
    <div className="body">
      <NavUser />
      {/* <NavLoginUser /> */}
      <div className="container body-register">
        <Row className="d-flex justify-content-center mb-5">
          <Col lg={5} md={5} sm={12} className="">
            <div className="logo-register text-center mb-4">
              <img style={{ width: "60px" }} src={logo} alt="logo" />
            </div>
            <p className="text-center">Mulai persiapan pernikahan Anda dengan penawaran terbaik & fitur eksklusif di Wedding-Day!</p>
            <div className="form-register">
              <Form onSubmit={(event) => handleSubmit(event)}>
                <Row>
                  <div className="Room d-flex flex-column">
                    <div className="mb-3 d-flex flex-column text-white" controlId="username">
                      <Form.Label>Username</Form.Label>
                      <Form.Control className="input-register" placeholder="username" autoComplete="off" value={username} onChange={(event) => setUsername(event.target.value)} />
                    </div>

                    <div className="mb-3 d-flex flex-column text-white" controlId="email">
                      <Form.Label>Email</Form.Label>
                      <Form.Control className="input-register" placeholder="Email" type="email" value={email} autoComplete="off" onChange={(event) => setEmail(event.target.value)} />
                    </div>

                    <div className="mb-3 d-flex flex-column text-white" controlId="password">
                      <Form.Label>password</Form.Label>
                      <Form.Control className="input-register" placeholder="password" type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
                    </div>
                  </div>
                </Row>

                <button className="button-submit mt-4 mb-4" type="submit">
                  Register
                </button>
                <hr style={{ color: "white" }} />
                <div className="content-wo ">
                  <h5 className="text-white">Ingin mendaftar sebagai WO ?</h5>
                  <Button style={{ background: "#84A1BE", borderColor: "#84A1BE" }}>Daftar ?</Button>
                  <hr style={{ color: "white" }} />
                  <h5 className="text-white">Masuk Sebagai WO ?</h5>
                  <Button style={{ background: "#84A1BE", borderColor: "#84A1BE" }}>Login ?</Button>
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
