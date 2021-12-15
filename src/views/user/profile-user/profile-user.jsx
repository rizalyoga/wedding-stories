import "./profile-user.css";
import { Form, Button, Row } from "react-bootstrap";
import NavUser from "../../components/navbar-user/navbar-user.jsx";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import allStore from "../../../store/actions/index";

const ProfileUser = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [disabled, setDisabled] = useState(true);

  const dispatch = useDispatch();
  const profileUser = useSelector(({ userProfile }) => userProfile);

  useEffect(() => {
    dispatch(allStore.ProfileUser());
    if (!localStorage.email) {
      localStorage.setItem("email", profileUser.data.Email);
    }
  }, [dispatch]);

  useEffect(() => {
    setUsername(localStorage.nama);
    setEmail(localStorage.email);
  }, [profileUser]);

  const unlock = () => {
    setDisabled(!disabled);
  };

  return (
    <div style={{ backgroundColor: "#5C7893", paddingTop: "5%", paddingBottom: "5%" }}>
      <NavUser />
      <div className="container">
        <div className="form-edit">
          <h1 className="text-center text-white mb-5 fw-bold">YOUR PROFILE</h1>
          <Form>
            <Row>
              <div className="Room d-flex flex-column">
                <Button className="mb-3" style={{ backgroundColor: "#F18493", border: "#9CB2C7" }} onClick={() => unlock()}>
                  Click for edit profile
                </Button>
                <div className="mb-3 d-flex flex-column text-white" controlId="username">
                  <Form.Label>Username</Form.Label>
                  <Form.Control disabled={disabled} className="input-register" placeholder="username" autoComplete="off" value={username} onChange={(event) => setUsername(event.target.value)} required />
                </div>

                <div className="mb-3 d-flex flex-column text-white" controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control disabled={disabled} className="input-register" placeholder="Email" type="email" value={email} autoComplete="off" onChange={(event) => setEmail(event.target.value)} required />
                </div>

                <div className="mb-1 d-flex flex-column text-white" controlId="password">
                  <Form.Label>password</Form.Label>
                  <p className="d-flex justify-content-center align-items-center">
                    <Form.Control id="password" disabled={disabled} placeholder="password" type="password" value={password} onChange={(event) => setPassword(event.target.value)} required autoComplete="off" />
                  </p>
                </div>
                <div className="button-edit">
                  <Button className="w-35" style={{ border: "#A5BED1", backgroundColor: "#A5BED1" }}>
                    Edit
                  </Button>
                  <Button className="w-35 ms-2 bg-danger" style={{ border: "#DC3545" }}>
                    delete
                  </Button>
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
