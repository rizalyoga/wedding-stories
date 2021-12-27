import { Col, Form, Button, InputGroup } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";
import "./profile-wo.css";

const FormProfile = (props) => {
  const [nameWO, setNameWO] = useState("");
  const [emailWO, setEmailWO] = useState("");
  const [phoneWO, setPhoneWO] = useState("");
  const [urlWO, setUrlWO] = useState("");
  const [adrsWO, setAdrsWO] = useState("");
  const [cityWO, setCityWO] = useState("");
  const [pwdWO, setpwdWO] = useState("");
  const [descWO, setDescWO] = useState("");

  // const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  // const { name, email, phone, url, description } = form;

  const navigate = useNavigate();

  useEffect(() => {
    setNameWO(props.name);
    setEmailWO(props.profileWo.email);
    setPhoneWO(props.profileWo.phonenumber);
    setUrlWO(props.profileWo.weburl);
    setAdrsWO(props.profileWo.address);
    setCityWO(props.profileWo.city);
    setDescWO(props.profileWo.about);
  }, [props.name]);

  useEffect(() => {
    // console.log(props.profileWo);
  }, [props.profileWo]);

  // const setField = (field, value) => {
  //   setForm({
  //     ...form,
  //     [field]: value,
  //   });
  //   // Check and see if errors exist, and remove them from the error object:
  //   if (!!errors[field])
  //     setErrors({
  //       ...errors,
  //       [field]: null,
  //     });
  // };

  const updateErr = (value) => {
    console.log(!!errors.value, value);

    // if (!!errors.value) {
    setErrors({
      ...errors,
      [value]: null,
    });
    // }
  };

  const findFormErrors = () => {
    const newErrors = {};
    const regexEmail =
      // eslint-disable-next-line
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    // name errors
    if (!nameWO.trim() || nameWO.trim() === "")
      newErrors.nameWO = "cannot be blank!";
    // email errors
    if (!emailWO.trim() || emailWO.trim() === "")
      newErrors.emailWO = "cannot be blank!";
    else if (regexEmail.test(emailWO) === false)
      newErrors.emailWO = "email is not valid!";
    // phone errors
    if (!phoneWO || phoneWO === "") newErrors.phoneWO = "cannot be blank!";
    else if (phoneWO.length < 11)
      newErrors.phoneWO = "phone number is too short!";
    // address errors
    if (!urlWO.trim() || urlWO.trim() === "")
      newErrors.urlWO = "cannot be blank!";
    // address errors
    if (!adrsWO.trim() || adrsWO.trim() === "")
      newErrors.adrsWO = "cannot be blank!";
    else if (adrsWO.length < 11) newErrors.adrsWO = "address is too short!";
    // city errors
    if (!cityWO || cityWO === "") newErrors.cityWO = "cannot be blank!";
    // description errors
    if (!descWO.trim() || descWO.trim() === "")
      newErrors.descWO = "cannot be blank!";
    else if (descWO.length < 11) newErrors.descWO = "description is too short!";
    //password
    if (pwdWO.length > 0 && pwdWO.length < 11)
      newErrors.pwdWO = "password is too short!";

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
      //   console.log("done");
      // }

      // else {
      const config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };
      const body = {
        WoName: nameWO.trim(),
        email: emailWO.trim(),
        password: "",
        PhoneNumber: phoneWO.trim(),
        weburl: urlWO.trim(),
        about: descWO.trim(),
        city: cityWO,
        address: adrsWO.trim(),
      };
      const data = new FormData();
      data.append("WoName", nameWO.trim());
      data.append("email", emailWO.trim());
      data.append("password", "");
      data.append("PhoneNumber", phoneWO);
      data.append("weburl", urlWO.trim());
      data.append("about", descWO.trim());
      data.append("city", cityWO);
      data.append("address", adrsWO.trim());

      console.log(data);
      // return;
      axios
        .put(`https://weddingstories.space/organizer/profile`, body, config)
        .then((data) => {
          console.log(data);
          navigate("/vendor/profile");
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
        .finally(() => {});
    }
  };

  // ---------------------- SHOW PASSWORD -----------------------------------//
  const [passwordShown, setPasswordShown] = useState(false);
  // Password toggle handler
  const togglePassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown(!passwordShown);
  };
  // ---------------------- END - SHOW PASSWORD ------------------------------//

  // ----------------------------- GET CITY ----------------------------------//
  const [cities, setCity] = useState([]);
  useEffect(() => {
    axios
      .get("https://weddingstories.space/cities")
      .then(({ data }) => {
        // console.log(data.data);
        setCity(data.data);
        console.log(cities);
      })
      .catch((err) => {
        console.log(err.message);
      });
  });

  return (
    <>
      <Form.Group as={Col} md="6" controlId="validationCustom03">
        <Form.Label className="mt-3">
          Business Name<sup>*</sup>
        </Form.Label>
        <Form.Control
          type="text"
          placeholder="Business Name"
          value={nameWO}
          onChange={(e) => {
            setNameWO(e.target.value);
            updateErr("nameWO");
            // setField("name", e.target.value);
          }}
          required
          isInvalid={!!errors.nameWO}
        />
        <Form.Text id="nameHelpBlock" muted>
          Your Bussiness Name must be more than 8 characters long.
        </Form.Text>
        <Form.Control.Feedback type="invalid">
          {errors.nameWO}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group as={Col} md="6" controlId="validationCustom05">
        <Form.Label className="mt-3">
          Email<sup>*</sup>
        </Form.Label>
        <Form.Control
          type="email"
          placeholder="Email"
          value={emailWO}
          onChange={
            (e) => {
              setEmailWO(e.target.value);
              updateErr("emailWO");
            }
            // setField("email", e.target.value)
          }
          required
          isInvalid={!!errors.emailWO}
        />
        <Form.Control.Feedback type="invalid">
          {errors.emailWO}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group as={Col} md="6" controlId="validationCustom05">
        <Form.Label className="mt-3">
          Phone Number<sup>*</sup>
        </Form.Label>
        <Form.Control
          type="tel"
          placeholder="Phone Number"
          value={phoneWO}
          onChange={
            (e) => {
              setPhoneWO(e.target.value);
              updateErr("phoneWO");
            }
            // setField("phone", e.target.value)
          }
          required
          isInvalid={!!errors.phoneWO}
        />
        <Form.Text id="descHelpBlock" muted>
          Your phone number must be more than 10 characters long.
        </Form.Text>
        <Form.Control.Feedback type="invalid">
          {errors.phoneWO}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group as={Col} md="6" controlId="validationCustom05">
        <Form.Label className="mt-3">
          URL Web<sup>*</sup>
        </Form.Label>
        <Form.Control
          type="text"
          placeholder="URL Web"
          value={urlWO}
          onChange={
            (e) => {
              setUrlWO(e.target.value);
              updateErr("urlWO");
            }
            // setField("phone", e.target.value)
          }
          required
          isInvalid={!!errors.urlWO}
        />
        <Form.Control.Feedback type="invalid">
          {errors.urlWO}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group as={Col} md="12" controlId="validationCustom05">
        <Form.Label className="mt-3">
          Address<sup>*</sup>
        </Form.Label>
        <Form.Control
          type="text"
          placeholder="URL Web"
          value={adrsWO}
          onChange={
            (e) => {
              setAdrsWO(e.target.value);
              updateErr("adrsWO");
            }
            // setField("phone", e.target.value)
          }
          required
          isInvalid={!!errors.adrsWO}
        />
        <Form.Text id="adrsHelpBlock" muted>
          The address must be more than 10 characters long.
        </Form.Text>
        <Form.Control.Feedback type="invalid">
          {errors.adrsWO}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group as={Col} md="6" controlId="validationCustom05">
        <Form.Label className="mt-3">
          City<sup>*</sup>
        </Form.Label>
        <Form.Select
          type="text"
          placeholder="City"
          value={cityWO}
          onChange={
            (e) => {
              setCityWO(e.target.value);
              updateErr("cityWO");
            }
            // setField("phone", e.target.value)
          }
          required
          isInvalid={!!errors.cityWO}
        >
          <option value="">Choose your city</option>
          {cities.map((el, idx) => (
            <option value={el.County}>{el.County}</option>
          ))}
        </Form.Select>

        <Form.Control.Feedback type="invalid">
          {errors.cityWO}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group as={Col} md="6" controlId="validationCustom05">
        <Form.Label className="mt-3">Password</Form.Label>
        <InputGroup>
          <Form.Control
            type={passwordShown ? "text" : "password"}
            placeholder="password"
            // value={pwdWO}
            // disabled="true"
            onChange={
              (e) => {
                setpwdWO(e.target.value);
                updateErr("pwdWO");
              }
              // setField("phone", e.target.value)
            }
            required
            isInvalid={!!errors.pwdWO}
          />
          <InputGroup.Text>
            {passwordShown ? (
              <i
                style={{
                  cursor: "pointer",
                }}
                className="bi bi-eye-slash"
                id="inlineFormInputGroup"
                onClick={() => togglePassword()}
              ></i>
            ) : (
              <i
                style={{
                  cursor: "pointer",
                }}
                className="bi bi-eye"
                id="inlineFormInputGroup"
                onClick={() => togglePassword()}
              ></i>
            )}
          </InputGroup.Text>
        </InputGroup>
        <Form.Text id="passwordHelpBlock" muted>
          Your password must be more than 8 characters long, empty the field if
          you don't want to change your password!
        </Form.Text>
        <Form.Control.Feedback type="invalid">
          {errors.pwdWO}
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
          value={descWO}
          onChange={
            (e) => {
              setDescWO(e.target.value);
              updateErr("descWO");
            }
            // setField("phone", e.target.value)
          }
          required
          isInvalid={!!errors.descWO}
        />
        <Form.Text id="descHelpBlock" muted>
          The description be more than 8 characters long.
        </Form.Text>
        <Form.Control.Feedback type="invalid">
          {errors.descWO}
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
          id="btn-edit-profile-wo"
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
