import {
  Container,
  Row,
  Image,
  Form,
  Col,
  Button,
  InputGroup,
} from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";
import NavLoginWo from "../../../components/navbar-wo/navbar-wo-login";
import "./formAddPackage.css";

const handlePhoto = (event) => {
  console.log(event.target.files[0]);
};
const FormAddPackage = () => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const { name, price, pax, photo, description } = form;
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

    // name errors
    if (!name || name.trim() === "") newErrors.name = "cannot be blank!";
    else if (name.length < 8)
      newErrors.name = "package name cannot be less than 8 characters!";
    // price errors
    if (!price || price === "") newErrors.price = "cannot be blank!";
    else if (price < 0) newErrors.price = "price cannot be negative!";
    else if (price.length > 10)
      newErrors.price = "price cannot be more than 10 characters!";
    else if (price.toString().includes("."))
      newErrors.price = "price cannot contain dots!";
    // pax errors
    if (!pax || pax === "") newErrors.pax = "cannot be blank!";
    else if (pax < 0) newErrors.pax = "pax cannot be negative!";
    else if (pax.length > 11)
      newErrors.pax = "pax cannot be more than 10 characters!";
    else if (pax.toString().includes("."))
      newErrors.pax = "pax cannot contain dots!";
    // photo errors
    if (!photo || photo === "") newErrors.photo = "cannot be blank!";
    else if (photo.size > 3e6)
      newErrors.photo = "Photo size cannot be more than 3 MB!";
    // description errors
    if (!description || description.trim() === "")
      newErrors.description = "cannot be blank!";
    else if (description.length < 20)
      newErrors.description = "Description cannot be less than 20 characters!";

    // else if (address.length < 6)
    //   newErrors.phonenumber = "phone number is too short!";

    return newErrors;
  };

  const handleCreatPackage = (event) => {
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
      const body = {
        packagename: name.trim(),
        price: price,
        pax: pax,
        packagedesc: description.trim(),
        urlphoto: photo,
      };
      const data = new FormData();
      data.append("packagename", name.trim());
      data.append("price", price);
      data.append("pax", pax);
      data.append("packagedesc", description.trim());
      data.append("urlphoto", photo);
      console.log(photo.size, config);
      // return;
      axios
        .post("https://weddingstories.space/package", data, config)
        .then((data) => {
          console.log(data);
          navigate("/vendor/packages");
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
        });
    }
  };

  const coba = () => {
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    const body = {
      packagename: name,
      price: price,
      pax: pax,
      packagedesc: description,
      urlphoto: photo,
    };
    console.log(body, config);
  };

  return (
    <>
      <NavLoginWo></NavLoginWo>
      <div className="form-add-package">
        <Container className="mb-5 mt-5">
          <Row>
            <h5
              className="col-6 cursor"
              onClick={() => navigate("/vendor/packages")}
            >
              <i class="bi bi-arrow-left-square "> </i>
              Your Packages
            </h5>
            <h2 className="title-page" style={{ color: "white" }}>
              Add New Package
            </h2>
            <hr />
          </Row>
          <Row className="border mt-3 mb-3">
            <Form.Group as={Col} md="12" controlId="validationCustom03">
              <Form.Label className="mt-3">
                Package Name<sup>*</sup>
              </Form.Label>
              <Form.Control
                type="text"
                autoComplete="off"
                placeholder="Package Name"
                onChange={(e) => setField("name", e.target.value)}
                required
                isInvalid={!!errors.name}
              />
              <Form.Text id="nameHelpBlock" muted>
                Package Name must be more than 8 characters long.
              </Form.Text>
              <Form.Control.Feedback type="invalid">
                {errors.name}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md={6} controlId="validationCustom05">
              <Form.Label className="mt-3">
                Price<sup>*</sup>
              </Form.Label>
              <InputGroup>
                <InputGroup.Text>Rp</InputGroup.Text>

                <Form.Control
                  type="number"
                  autoComplete="off"
                  placeholder="Price"
                  onChange={(e) => setField("price", e.target.value)}
                  required
                  isInvalid={!!errors.price}
                />
                <Form.Text as={Col} md={12} id="priceHelpBlock" muted>
                  The maximum price is Rp 9.999.999.999.
                </Form.Text>
                <Form.Control.Feedback type="invalid">
                  {errors.price}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>

            <Form.Group as={Col} md={6} controlId="validationCustom05">
              <Form.Label className="mt-3">
                Pax<sup>*</sup>
              </Form.Label>
              <Form.Control
                type="number"
                autoComplete="off"
                placeholder="Pax"
                onChange={(e) => setField("pax", e.target.value)}
                required
                isInvalid={!!errors.pax}
              />
              <Form.Control.Feedback type="invalid">
                {errors.pax}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="12" controlId="validationCustom05">
              <Form.Label className="mt-3">
                Description<sup>*</sup>
              </Form.Label>
              <Form.Control
                as="textarea"
                autoComplete="off"
                rows={5}
                placeholder="Description"
                onChange={(e) => setField("description", e.target.value)}
                required
                isInvalid={!!errors.description}
              />
              <Form.Text as={Col} md={12} id="descHelpBlock" muted>
                The description must be more than 20 characters long.
              </Form.Text>
              <Form.Control.Feedback type="invalid">
                {errors.description}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="12">
              <Form.Label className="mt-3">
                Photo <sup>*</sup>
              </Form.Label>
              <Form.Control
                type="file"
                placeholder=""
                accept="image/png, image/jpg, image/jpeg, image/bnp"
                onChange={(e) => {
                  setField("photo", e.target.files[0]);
                  // handlePhoto(e);
                }}
                required
                isInvalid={!!errors.photo}
              />
              <Form.Text as={Col} md={12} id="photoHelpBlock" muted>
                File type: jpg/jpeg/png/bnp · Max size: 3 MB.
              </Form.Text>
              <Form.Control.Feedback type="invalid">
                {errors.photo}
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
                id="btn-add-package"
                className="col-12 mt-3 mb-3 btn-submit"
                variant="primary"
                onClick={(e) => handleCreatPackage(e)}
              >
                Save
              </Button>
            </Form.Group>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default FormAddPackage;
