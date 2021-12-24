import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import "./register-wo.css";
import LandingPage from "../../home/before-login/index.jsx";
import NavUser from "../../components/navbar-user/navbar-user.jsx";

const RegisterWO = () => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const { name, email, password, address, city, phone } = form;
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
    else if (name.length < 8)
      newErrors.name = "Bussiness Name cannot be less than 8!";
    // email errors
    if (!email || email === "") newErrors.email = "cannot be blank!";
    else if (regexEmail.test(email) === false)
      newErrors.email = "email is not valid!";
    // password errors
    if (!password || password === "") newErrors.password = "cannot be blank!";
    else if (password.length < 8)
      newErrors.password = "password cannot be less than 8!";
    // address errors
    if (!address || address === "") newErrors.address = "cannot be blank!";
    // city errors
    if (!city || city === "") newErrors.city = "cannot be blank!";
    // phone errors
    if (!phone || phone === "") newErrors.phone = "cannot be blank!";
    else if (phone < 0) newErrors.phone = "phone number cannot be negative!";
    else if (phone.length < 9)
      newErrors.phone = "phone number cannot be less than 8!";
    else if (phone.length > 15)
      newErrors.phone = "phone number cannot be more than 14!";

    // else if (address.length < 6)
    //   newErrors.phonenumber = "phone number is too short!";

    return newErrors;
  };

  const handleRegister = (event) => {
    event.preventDefault();
    const newErrors = findFormErrors();
    // Conditional logic:
    if (Object.keys(newErrors).length > 0) {
      // We got errors!
      setErrors(newErrors);
    } else {
      const body = {
        WoName: name.trim(),
        email: email.trim(),
        PhoneNumber: phone.trim(),
        password: password,
        city: city,
        address: address.trim(),
      };
      console.log(body);
      // return;
      axios
        .post("https://weddingstories.space/register/organizer", body)
        .then((data) => {
          console.log(data);
          swal(data.data.message);
          navigate("/vendor/login");
        })
        .catch((err) => {
          const online = window.navigator.onLine;
          console.log(err.response.data.message);

          if (online) {
            console.log("Back Online");
            swal(err.response.data.message);
          } else if (!online) {
            swal(err.message);
          }
        });
    }
  };

  if (localStorage.token) {
    return <LandingPage />;
  } else {
    return (
      <>
        <NavUser />
        <div className="register-wo">
          <Container>
            <Row>
              <Col md={8} sm={12} className="">
                <h1 className="title-text">
                  The Right Place To Grow Your Wedding Business
                </h1>
                <hr className="strip" />
                <p className="description-text">
                  Join more than 20,000 wedding vendors from 70 countries who
                  have connected with millions of engaged couples through
                  Bridestory.
                </p>
              </Col>
              <Col md={4} sm={12}>
                <Form id="form-register-wo">
                  <Row className="mt-5 pt-5">
                    <Form.Group
                      as={Col}
                      md="12"
                      controlId="validationCustomUsername"
                    >
                      <Form.Label className="title-form">
                        Bussiness Name
                      </Form.Label>
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
                    <Form.Group as={Col} md="12" controlId="validationCustom04">
                      <Form.Label className="title-form">City</Form.Label>
                      <Form.Select
                        type="text"
                        placeholder="City"
                        onChange={(e) => setField("city", e.target.value)}
                        required
                        isInvalid={!!errors.city}
                      >
                        <option>- Select City -</option>
                        <option>Jakarta</option>
                        <option>Surabaya</option>
                        <option>Bandung</option>
                        <option>Makassar</option>
                      </Form.Select>
                      <Form.Control.Feedback type="invalid">
                        {errors.address}
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="12" controlId="validationCustom05">
                      <Form.Label className="title-form">
                        Phone Number
                      </Form.Label>
                      <Form.Control
                        type="tel"
                        placeholder="Phone Number"
                        onChange={(e) => setField("phone", e.target.value)}
                        required
                        isInvalid={!!errors.phone}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.phone}
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
                  {/* <Form.Group className="mb-12 mt-3">
                  <Form.Check
                    className="title-form"
                    required
                    label="Agree to terms and conditions"
                    feedback="You must agree before submitting."
                    feedbackType="invalid"
                  />
                </Form.Group> */}
                  <Button
                    id="btn-register-wo"
                    className="col-12 mt-3 mb-3 btn-submit"
                    variant="primary"
                    onClick={(e) => handleRegister(e)}
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
        </div>
      </>
    );
  }
};

export default RegisterWO;
