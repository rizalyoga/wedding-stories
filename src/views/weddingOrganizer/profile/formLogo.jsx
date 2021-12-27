import { Col, Form, Button, Image, Row, Spinner } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import axios from "axios";
import NavLoginWo from "../../components/navbar-wo/navbar-wo-login";
import "./profile-wo.css";

const FormLogo = (props) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const { logo } = form;

  const findFormErrors = () => {
    const newErrors = {};
    // photo errors
    if (!logo || logo === "") newErrors.logo = "cannot be blank!";
    else if (logo.size > 3e6)
      newErrors.logo = "Photo size cannot be more than 3 MB!";
    return newErrors;
  };

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

  const handleUploadLogo = (event) => {
    event.preventDefault();
    const newErrors = findFormErrors();
    // Conditional logic:
    if (Object.keys(newErrors).length > 0) {
      // We got errors!
      setErrors(newErrors);
    } else {
      setLoading(true);
      const config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };
      const data = new FormData();
      data.append("logo", logo);
      console.log(logo);
      // return;
      axios
        .put(
          `https://weddingstories.space/organizer/profile/photo`,
          data,
          config
        )
        .then((data) => {
          console.log(data);
          swal(data.data.message);
        })
        .catch((err) => {
          const online = window.navigator.onLine;
          console.log(err);

          if (online) {
            console.log("Back Online");
            swal(err.response.data.message);
          } else if (!online) {
            swal(err.message);
          }
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  if (loading) {
    return (
      <>
        <NavLoginWo />
        <div className="spinner-bg">
          <Spinner className="spinner" animation="border" />
        </div>
      </>
    );
  }

  return (
    <Row className=" mt-3 mb-3">
      <Col></Col>
      <Col className="border" md={5} sm={12}>
        <Form.Group as={Col} md="12">
          <Image className="mt-3 logo-wo" src={props.src} border thumbnail />
        </Form.Group>
        <Form.Group as={Col} md="12">
          <div className="mt-3 text-center">
            <Form.Label className="">Logo</Form.Label>
          </div>
          <Form.Control
            type="file"
            placeholder="Logo"
            accept="image/png, image/jpg, image/jpeg, image/bnp"
            onChange={
              (e) => setField("logo", e.target.files[0])
              // setLogo(e.target.value)
            }
            required
            isInvalid={!!errors.logo}
          />
          <Form.Text id="logoHelpBlock" muted>
            File type: jpg/jpeg/png/bnp · Max size: 3 MB.
          </Form.Text>
          <Form.Control.Feedback type="invalid">
            {errors.logo}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="12" className="btn-edit mb-3">
          <Button
            id="btn-edit-logo-wo"
            className="col-12 mt-4 btn-submit"
            variant="primary"
            onClick={(e) => handleUploadLogo(e)}
          >
            Save
          </Button>
        </Form.Group>
      </Col>
      <Col></Col>
    </Row>
  );
};

export default FormLogo;
