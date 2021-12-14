import "./profile-user.css";
import { Form, Button, Row, Col } from "react-bootstrap";
import NavUser from "../../components/navbar-user/navbar-user.jsx";
import { useState, useEffect } from "react";

const ProfileUser = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    setUsername(localStorage.nama);
    setEmail(localStorage.email);
  }, []);

  return (
    <div style={{ backgroundColor: "#5C7893", paddingTop: "5%", paddingBottom: "5%" }}>
      <NavUser />
      <div className="container">
        <div className="form-edit">
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
                  </p>
                </div>
              </div>
            </Row>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ProfileUser;
