import { Col, Form, Button } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";
import "./profile-wo.css";

const FormFile = (props) => {
  const navigate = useNavigate();
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const { file } = form;
  const [status, setStatus] = useState(true);

  const findFormErrors = () => {
    const newErrors = {};
    // photo errors
    if (!file || file === "") newErrors.file = "cannot be blank!";
    else if (file.size > 3e6)
      newErrors.file = "File size cannot be more than 3 MB!";
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

  const handleUploadFile = (event) => {
    event.preventDefault();
    const newErrors = findFormErrors();
    // Conditional logic:
    if (Object.keys(newErrors).length > 0) {
      // We got errors!
      setErrors(newErrors);
    } else {
      const config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };
      const data = new FormData();
      data.append("file", file);
      console.log(file);
      // return;
      axios
        .put(
          `https://weddingstories.space/organizer/profile/document`,
          data,
          config
        )
        .then((data) => {
          console.log(data);
          swal(data.data.message);
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
        })
        .finally(() => {});
    }
  };

  const checkFile = () => {
    if (props.profileWo.proof) {
      return "Open File";
    } else if (!props.profileWo.proof) {
      return "No File Yet.";
    }
  };

  const changeStatus = () => {
    setStatus(!status);
  };

  return (
    <>
      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
          // checked={status == "off"}
          onChange={(e) => changeStatus()}
        />
      </Form.Group>
      <Form.Group as={Col} md="10" controlId="validationCustom05">
        <Form.Label className="mt-3">File</Form.Label>
        <Form.Control
          type="file"
          placeholder=""
          accept="application/pdf"
          onChange={(e) => setField("file", e.target.files[0])}
          required
          disabled={status}
          isInvalid={!!errors.file}
        />
        <Form.Control.Feedback type="invalid">
          {errors.file}
        </Form.Control.Feedback>
        <h7>file type: pdf · max size: 3 MB</h7>
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
          disabled={status}
          onClick={(e) => handleUploadFile(e)}
        >
          Upload
        </Button>
      </Form.Group>
      <Form.Group
        as={Col}
        md="2"
        className="mb-3 mt-5"
        controlId="validationCustom05"
      >
        <h6>
          Your File:{" "}
          <a
            href={props.profileWo.proof == "" ? null : props.profileWo.proof}
            target="_blank"
          >
            {checkFile()}
          </a>{" "}
        </h6>
      </Form.Group>
    </>
  );
};

export default FormFile;
