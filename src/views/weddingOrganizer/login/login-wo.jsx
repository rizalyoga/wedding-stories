import { Col, Container, Row, Image, Form, Button, Spinner } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";
import "./login-wo.css";
import NavUser from "../../components/navbar-user/navbar-user.jsx";

const LoginWO = () => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const { email, password } = form;
  const navigate = useNavigate();

  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    });
    // Check and see if errors exist, and remove them from the error object:
    if (!!errors[field])
      setErrors({
        ...errors,
        [field]: null,
      });
  };

  const findFormErrors = () => {
    const newErrors = {};
    const regexEmail =
      // eslint-disable-next-line
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    // email errors
    if (!email || email === "") newErrors.email = "cannot be blank!";
    else if (regexEmail.test(email) === false) newErrors.email = "email is not valid!";
    // password errors
    if (!password || password === "") newErrors.password = "cannot be blank!";
    else if (password.length < 4) newErrors.password = "password is too short!";
    // password errors

    return newErrors;
  };

  const handleLogin = (event) => {
    setLoading(true);
    event.preventDefault();
    const newErrors = findFormErrors();
    // Conditional logic:
    if (Object.keys(newErrors).length > 0) {
      // We got errors!
      setErrors(newErrors);
    } else {
      const body = {
        email: email.trim(),
        password: password.trim(),
      };
      console.log(body);
      // return;
      const online = window.ononline;
      axios
        .post("https://weddingstories.space/login/organizer", body)
        .then((data) => {
          console.log(data);
          swal(data.data.message);
          localStorage.setItem("name", data.data.name);
          localStorage.setItem("status", data.data.role);
          localStorage.setItem("id", data.data.id);
          localStorage.setItem("token", data.data.token);
          navigate("/vendor/profile");
          window.location.reload();
        })
        .catch((err) => {
          console.log(err.message);

          // window.ononline = (event) => {};
          if (online) {
            console.log("Back Online");
            swal(err.response.data.message);
          } else {
            swal(err.response.data.message);
          }
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  if (loading) {
    return (
      <div className="loading d-flex justify-content-center align-items-center flex-column">
        <Spinner animation="border" />
      </div>
    );
  }

  return (
    <>
      <NavUser />
      <Container fluid>
        <Row>
          <Col md={7} sm={12}>
            <Image className="login-img" src="https://image-tc.galaxy.tf/wijpeg-dvdbt3gqdrxlcnyayresvpvpy/file.jpg?width=1920" width="100%" height="1vh" fluid />
          </Col>
          <Col md={5} sm={12}>
            <Form className="form-login" id="form-login-wo">
              <Row>
                <Form.Group className="mb-3" as={Col} md="12" controlId="validationCustom03">
                  {/* <Form.Label className="">Email</Form.Label> */}
                  <Form.Control type="text" placeholder="Email" onChange={(e) => setField("email", e.target.value)} autoComplete="off" required isInvalid={!!errors.email} />
                  <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="12" controlId="validationCustom05">
                  {/* <Form.Label className="">Password</Form.Label> */}
                  <Form.Control type="password" placeholder="Password" onChange={(e) => setField("password", e.target.value)} autoComplete="off" required isInvalid={!!errors.password} />
                  <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Button id="btn-login-wo" className="col-12 mt-3 mb-3 btn-submit" variant="primary" onClick={(e) => handleLogin(e)}>
                Log in
              </Button>
            </Form>
            <h7 className="mt-3">
              Don't have an account?{" "}
              <a href="/vendor/register" className="title-form text-primary">
                Apply now
              </a>{" "}
            </h7>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default LoginWO;
