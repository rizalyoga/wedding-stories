import { Container, Row, Col, Form, InputGroup, Button } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./register-wo.css";

const RegisterWO = () => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const { name, email, password, address } = form;
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

    // name errors
    if (!name || name === "") newErrors.name = "cannot be blank!";
    // email errors
    if (!email || email === "") newErrors.email = "cannot be blank!";
    else if (regexEmail.test(email) === false)
      newErrors.email = "email is not valid!";
    // password errors
    if (!password || password === "") newErrors.password = "cannot be blank!";
    else if (password.length < 4) newErrors.password = "password is too short!";
    // password errors
    if (!address || address === "") newErrors.address = "cannot be blank!";
    // else if (address.length < 6)
    //   newErrors.phonenumber = "phone number is too short!";

    return newErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = findFormErrors();
    // Conditional logic:
    if (Object.keys(newErrors).length > 0) {
      // We got errors!
      setErrors(newErrors);
    } else {
      navigate("/vendor/login");
    }
  };

  return (
    <>
      <Container>
        <Row>
          <Col md={8} sm={12} className="">
            <h1 className="title-text">
              The Right Place To Grow Your Wedding Business
            </h1>
            <hr className="strip" />
            <p className="description-text">
              Join more than 20,000 wedding vendors from 70 countries who have
              connected with millions of engaged couples through Bridestory.
            </p>
          </Col>
          <Col md={4} sm={12}>
            <Form onSubmit={handleSubmit}>
              <Row className="mt-5 pt-5">
                <Form.Group
                  as={Col}
                  md="12"
                  controlId="validationCustomUsername"
                >
                  <Form.Label className="title-form">Bussiness Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Bussiness name"
                    aria-describedby="inputGroupPrepend"
                    onChange={(e) => setField("name", e.target.value)}
                    required
                    isInvalid={!!errors.name}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.name}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="12" controlId="validationCustom03">
                  <Form.Label className="title-form">Email</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Email"
                    onChange={(e) => setField("email", e.target.value)}
                    required
                    isInvalid={!!errors.email}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="12" controlId="validationCustom04">
                  <Form.Label className="title-form">Address</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Address"
                    onChange={(e) => setField("address", e.target.value)}
                    required
                    isInvalid={!!errors.address}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.address}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="12" controlId="validationCustom05">
                  <Form.Label className="title-form">Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setField("password", e.target.value)}
                    required
                    isInvalid={!!errors.password}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.password}
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Form.Group className="mb-12 mt-3">
                <Form.Check
                  className="title-form"
                  required
                  label="Agree to terms and conditions"
                  feedback="You must agree before submitting."
                  feedbackType="invalid"
                />
              </Form.Group>
              <Button
                className="col-12 mt-3 mb-3 btn-submit"
                variant="primary"
                onClick={handleSubmit}
              >
                Register
              </Button>
            </Form>
            <h7 className="mt-3">
              Have an account?{" "}
              <a href="/vendor/login" className="title-form">
                Login here
              </a>{" "}
            </h7>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default RegisterWO;
