import { Col, Form, Button, Image } from "react-bootstrap";
import { useState } from "react";
import "./profile-wo.css";

const FormFile = () => {
  return (
    <>
      <Form.Group as={Col} md="10" controlId="validationCustom05">
        <Form.Label className="mt-3">File</Form.Label>
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
      <Form.Group
        as={Col}
        md="2"
        className="mb-3"
        controlId="validationCustom05"
      >
        <Button
          id="btn-edit-file-wo"
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

export default FormFile;
