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
  // coba state
  const [packName, setPackName] = useState("");
  const [packPrice, setPackPrice] = useState("");
  const [packPax, setPackPax] = useState("");
  const [packDesc, setPackDesc] = useState("");
  // state end

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
    if (!packName || packName === "") newErrors.packName = "cannot be blank!";
    else if (packName.length < 8)
      newErrors.packName = "Package name cannot be less than 8 characters!";
    // price errors
    if (!packPrice || packPrice === "")
      newErrors.packPrice = "cannot be blank!";
    else if (packPrice < 0) newErrors.packPrice = "price cannot be negative!";
    // pax errors
    if (!packPax || packPax === "") newErrors.packPax = "cannot be blank!";
    else if (packPax < 0) newErrors.packPax = "pax cannot be negative!";

    // city errors
    if (!packDesc || packDesc === "") newErrors.packDesc = "cannot be blank!";
    else if (packDesc.length < 20)
      newErrors.packDesc = "Description cannot be less than 20 characters!";

    // else if (address.length < 6)
    //   newErrors.phonenumber = "phone number is too short!";

    return newErrors;
  };

  const findFormPhoto = () => {
    const newErrors = {};
    // photo errors
    if (!photo || photo === "") newErrors.photo = "cannot be blank!";
    else if (photo.size > 3e6)
      newErrors.photo = "Photo size cannot be more than 3 MB!";

    return newErrors;
  };

  useEffect(() => {
    console.log(pack);
  }, [pack]);

  const handleUploadPhoto = (event) => {
    event.preventDefault();
    const newErrors = findFormPhoto();
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
      data.append("urlphoto", photo);
      console.log(DataTransferItemList);
      // return;
      axios
        .put(
          `https://weddingstories.space/package/photo/${params.id}`,
          data,
          config
        )
        .then((data) => {
          window.location.reload();
          console.log(data);
          navigate(`/vendor/packages/edit/${params.id}`);
          swal(data.data.message);
        })
        .catch((err) => {
          console.log(err.message);
          swal(err.response.data.message);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  const handleCreatPackage = (event) => {
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
      // const data = new FormData();
      // data.append("packagename", name);
      // data.append("price", price);
      // data.append("pax", pax);
      // data.append("packagedesc", description);
      const body = {
        packagename: packName,
        price: packPrice,
        pax: packPax,
        packagedesc: packDesc,
      };
      console.log(body);
      // return;
      axios
        .put(`https://weddingstories.space/package/${params.id}`, body, config)
        .then((data) => {
          console.log(data);
          navigate(`/vendor/packages/`);
          swal(data.data.message);
        })
        .catch((err) => {
          console.log(err.message);
          swal(err.response.data.message);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://weddingstories.space/package/${params.id}`)
      .then(({ data }) => {
        console.log(data.data.PackageDesc);
        setPack(data.data);
        // setField("price", data.data.Price);
        // setField("pax", data.data.Pax);
        // setField("description", data.data.PackageDesc);
        // setField("name", data.data.PackageName);
        setPackName(data.data.PackageName);
        setPackPrice(data.data.Price);
        setPackPax(data.data.Pax);
        setPackDesc(data.data.PackageDesc);

        // console.log(pack);
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

          <Row className="border mt-3 mb-3">
            <Image
              as={Col}
              md="5"
              className="mt-2 mb-2 pt-package"
              src={pack.UrlPhoto}
              width="100%"
              height="100%"
              thumbnail
            />
            <Form.Group as={Col} md="10">
              <Form.Label className="mt-3">
                Photo{" "}
                <h7>( file type : jpg/jpeg/png/bnp · max size : 3 MB )</h7>
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

              <Form.Control.Feedback type="invalid">
                {errors.photo}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              as={Col}
              md="2"
              className="btn-edit"
              controlId="validationCustom05"
            >
              <Button
                id="btn-edit-package"
                className="col-12 mt-5 mb-4 btn-submit"
                variant="primary"
                onClick={(e) => handleUploadPhoto(e)}
              >
                Save
              </Button>
            </Form.Group>
          </Row>
          <Row className="border mt-3 mb-3">
            <Form.Group as={Col} md="12" controlId="validationCustom03">
              <Form.Label className="mt-3">
                Package Name<sup>*</sup>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Package Name"
                onChange={
                  (e) => setPackName(e.target.value)
                  // setField("name", e.target.value)
                }
                required
                isInvalid={!!errors.name}
                value={packName}
                // defaultValue={pack.PackageName}
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
                onChange={
                  (e) => setPackPrice(e.target.value)
                  //  setField("price", e.target.value)
                }
                required
                isInvalid={!!errors.price}
                value={packPrice}
                // defaultValue={pack.Price}
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
                onChange={
                  (e) => setPackPax(e.target.value)
                  // setField("pax", e.target.value)
                }
                required
                isInvalid={!!errors.pax}
                value={packPax}
                // defaultValue={pack.Pax}
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
                onChange={
                  (e) => setPackDesc(e.target.value)
                  // setField("description", e.target.value)
                }
                required
                isInvalid={!!errors.description}
                value={packDesc}
                // defaultValue={pack.PackageDesc}
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
                id="btn-edit-package"
                className="col-12 mt-3 mb-3 btn-submit"
                variant="primary"
                onClick={(e) => handleCreatPackage(e)}
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
