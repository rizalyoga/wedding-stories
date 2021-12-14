import { Col, Form, Button } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./profile-wo.css";

const FormProfile = () => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const { name, email, phone, url, description } = form;
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
    // phone errors
    if (!phone || phone === "") newErrors.phone = "cannot be blank!";
    else if (phone.length < 11) newErrors.phone = "phone number is too short!";
    // address errors
    if (!url || url === "") newErrors.url = "cannot be blank!";
    // city errors
    if (!description || description === "")
      newErrors.description = "cannot be blank!";

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
      navigate("/vendor/profile");
    }
  };

  return (
    <>
      <Form.Group as={Col} md="6" controlId="validationCustom03">
        <Form.Label className="mt-3">
          Business Name<sup>*</sup>
        </Form.Label>
        <Form.Control
          type="text"
          placeholder="Business Name"
          onChange={(e) => setField("name", e.target.value)}
          required
          isInvalid={!!errors.name}
        />
        <Form.Control.Feedback type="invalid">
          {errors.name}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group as={Col} md="6" controlId="validationCustom05">
        <Form.Label className="mt-3">
          Email<sup>*</sup>
        </Form.Label>
        <Form.Control
          type="email"
          placeholder="Email"
          onChange={(e) => setField("email", e.target.value)}
          required
          isInvalid={!!errors.email}
        />
        <Form.Control.Feedback type="invalid">
          {errors.email}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group as={Col} md="6" controlId="validationCustom05">
        <Form.Label className="mt-3">
          Phone Number<sup>*</sup>
        </Form.Label>
        <Form.Control
          type="phone"
          placeholder="Phone Number"
          onChange={(e) => setField("phone", e.target.value)}
          required
          isInvalid={!!errors.phone}
        />
        <Form.Control.Feedback type="invalid">
          {errors.phone}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group as={Col} md="6" controlId="validationCustom05">
        <Form.Label className="mt-3">
          URL Web<sup>*</sup>
        </Form.Label>
        <Form.Control
          type="text"
          placeholder="URL Web"
          onChange={(e) => setField("url", e.target.value)}
          required
          isInvalid={!!errors.url}
        />
        <Form.Control.Feedback type="invalid">
          {errors.url}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group as={Col} md="12" controlId="validationCustom05">
        <Form.Label className="mt-3">
          Description<sup>*</sup>
        </Form.Label>
        <Form.Control
          as="textarea"
          rows={5}
          placeholder="Description"
          onChange={(e) => setField("description", e.target.value)}
          required
          isInvalid={!!errors.description}
        />
        <Form.Control.Feedback type="invalid">
          {errors.description}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group as={Col} md="10" controlId="validationCustom05">
        <Form.Label className="mt-3">
          <h6>
            <sup>* Required</sup>
          </h6>
        </Form.Label>
      </Form.Group>
      <Form.Group
        as={Col}
        md="2"
        className="btn-edit"
        controlId="validationCustom05"
      >
        <Button
          className="col-12 mt-3 mb-3 btn-submit"
          variant="primary"
          onClick={(e) => handleSubmit(e)}
        >
          Save
        </Button>
      </Form.Group>
    </>
  );
};

export default FormProfile;
