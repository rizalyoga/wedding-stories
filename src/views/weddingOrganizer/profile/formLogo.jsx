import { Col, Form, Button, Image } from "react-bootstrap";
import { useState } from "react";
import "./profile-wo.css";

const FormLogo = () => {
  const [logo, setLogo] = useState(
    "https://static.vecteezy.com/system/resources/thumbnails/000/611/076/small/13343-01.jpg"
  );

  return (
    <>
      <Form.Group as={Col} md="4"></Form.Group>
      <Form.Group as={Col} md="4">
        <Image
          className="mt-3"
          src={logo}
          placeholder={logo}
          width="100%"
          height="100%"
          border
          thumbnail
        />
      </Form.Group>
      <Form.Group as={Col} md="4"></Form.Group>
      <Form.Group as={Col} md="10">
        <Form.Label className="mt-3">Logo</Form.Label>
        <Form.Control
          type="file"
          placeholder=""
          // onChange={(e) => setField("password", e.target.value)}
          // required
          // isInvalid={!!errors.password}
        />
        <Form.Control.Feedback type="invalid">
          {/* {errors.password} */}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group as={Col} md="2" className="btn-edit mb-3">
        <Button
          id="btn-edit-logo-wo"
          className="col-12 mt-5 btn-submit"
          variant="primary"
          onClick=""
        >
          Save
        </Button>
      </Form.Group>
    </>
  );
};

export default FormLogo;
