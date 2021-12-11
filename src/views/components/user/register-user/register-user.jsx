import "./register-user.css";
import { Form, Row, Col } from "react-bootstrap";
import { useState } from "react";
import NavUser from "../../navbar-user/navbar-user.jsx";
import logo from "../../../../assets/virus.png";

const RegisUser = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {};

  return (
    <div className="body">
      <NavUser />
      <div className="container body-register">
        <Row className="d-flex justify-content-center mb-5">
          <Col lg={5} md={6} sm={12} className="">
            <div className="logo text-center mb-4">
              <img style={{ width: "60px" }} src={logo} alt="logo" />
            </div>
            <p className="text-center">Mulai persiapan pernikahan Anda dengan penawaran terbaik & fitur eksklusif di Wedding-Day!</p>
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

              <button className="button-submit mt-4" type="submit">
                Register
              </button>
            </Form>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default RegisUser;
