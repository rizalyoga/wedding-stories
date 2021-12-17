import {
  Container,
  Row,
  Image,
  Form,
  Col,
  Button,
  Spinner,
} from "react-bootstrap";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";
import NavLoginWo from "../../../components/navbar-wo/navbar-wo-login";
import "./editPackage.css";

const FormEditPackage = () => {
  const [loading, setLoading] = useState(false);
  const [pack, setPack] = useState({});
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const { name, price, pax, photo, description } = form;
  const navigate = useNavigate();
  const params = useParams();

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
    if (!name || name === "") newErrors.name = "cannot be blank!";
    else if (name.length < 8)
      newErrors.name = "Package name cannot be less than 8 characters!";
    // price errors
    if (!price || price === "") newErrors.price = "cannot be blank!";
    else if (price < 0) newErrors.price = "price cannot be negative!";
    // pax errors
    if (!pax || pax === "") newErrors.pax = "cannot be blank!";
    else if (pax < 0) newErrors.pax = "pax cannot be negative!";
    // photo errors
    if (!photo || photo === "") newErrors.photo = "cannot be blank!";
    else if (photo.size > 1e8)
      newErrors.photo = "Photo size cannot be more than 100 MB!";
    // city errors
    if (!description || description === "")
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
        packagename: name,
        price: price,
        pax: pax,
        packagedesc: description,
        urlphoto: photo,
      };
      const data = new FormData();
      data.append("packagename", name);
      data.append("price", price);
      data.append("pax", pax);
      data.append("packagedesc", description);
      data.append("urlphoto", photo);
      console.log(photo.size, config);
      // return;
      axios
        .post("https://weddingstories.space/package", data, config)
        .then((data) => {
          console.log(data);
          swal(data.data.message);
          navigate("/vendor/packages");
        })
        .catch((err) => {
          console.log(err.message);
          swal(err.response.data.message);
        });
    }
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://weddingstories.space/package/${params.id}`)
      .then(({ data }) => {
        console.log(data.data);
        setPack(data.data);
        console.log(pack);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <>
        <NavLoginWo />
        <Spinner className="spinner" animation="border" />
      </>
    );
  }

  return (
    <>
      <NavLoginWo></NavLoginWo>
      <div className="form-add-package">
        {/* {pack.map((el, idx) => ( */}
        <Container className="mb-5 mt-5">
          <Row>
            <h5
              className="col-6 cursor"
              onClick={() => navigate("/vendor/packages")}
            >
              <i class="bi bi-arrow-left-square "> </i>
              Your Packages
            </h5>
            <h2 className="title-page">Edit Package</h2>
            <hr />
          </Row>

          {/* form */}

          <Row className="mt-3 mb-3">
            <Image
              className="mt-2 mb-2 pt-package"
              src={pack.UrlPhoto}
              width="100%"
              height="100%"
              thumbnail
            />
          </Row>
          <Row className="border mt-3 mb-3">
            <Form.Group as={Col} md="12" controlId="validationCustom03">
              <Form.Label className="mt-3">
                Package Name<sup>*</sup>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Package Name"
                onChange={(e) => setField("name", e.target.value)}
                required
                isInvalid={!!errors.name}
                value={name}
                defaultValue={pack.PackageName}
              ></Form.Control>

              <Form.Control.Feedback type="invalid">
                {errors.name}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="6" controlId="validationCustom05">
              <Form.Label className="mt-3">
                Price<sup>*</sup>
              </Form.Label>
              <Form.Control
                type="number"
                placeholder="Price"
                onChange={(e) => setField("price", e.target.value)}
                required
                isInvalid={!!errors.price}
                defaultValue={pack.Price}
              />
              <Form.Control.Feedback type="invalid">
                {errors.price}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="6" controlId="validationCustom05">
              <Form.Label className="mt-3">
                Pax<sup>*</sup>
              </Form.Label>
              <Form.Control
                type="number"
                placeholder="Pax"
                onChange={(e) => setField("pax", e.target.value)}
                required
                isInvalid={!!errors.pax}
                defaultValue={pack.Pax}
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
                rows={5}
                placeholder="Description"
                onChange={(e) => setField("description", e.target.value)}
                required
                isInvalid={!!errors.description}
                defaultValue={pack.PackageDesc}
              />
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
              <h7>file type : jpg/jpeg/png/bnp - max size : 3 MB</h7>
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
                id="btn-edit-package"
                className="col-12 mt-3 mb-3 btn-submit"
                variant="primary"
                // onClick={(e) => handleCreatPackage(e)}
              >
                Save
              </Button>
            </Form.Group>
          </Row>
        </Container>
        {/* ))} */}
      </div>
    </>
  );
};

export default FormEditPackage;
