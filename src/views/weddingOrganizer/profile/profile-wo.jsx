import { Container, Row, Col, Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import allStore from "../../../store/actions/index.js";
import LogoWo from "../../../assets/unknown.png";
import FormLogo from "./formLogo";
import FormProfile from "./formProfile";
import FormFile from "./formFile";
import "./profile-wo.css";
import NavWO from "../../components/navbar-wo/navbar-wo-login.jsx";

const ProfileWO = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [nameWO, setNameWO] = useState("");
  const [email, setEmail] = useState("");

  /* --------------------------- GET LIST PACKAGE WO -------------------------- */
  const profileWo = useSelector(({ profileWo }) => profileWo);
  useEffect(() => {
    dispatch(allStore.fetchProfileWo());
    setNameWO(profileWo.woname);
    setEmail(profileWo.email);
    // console.log(profileWo);
  }, [dispatch, profileWo]);

  return (
    <>
      <NavWO />
      <div className="profile-wo">
        <Container className="mb-5 mt-5">
          <Row>
            <h5
              className="col-6 cursor"
              onClick={() => navigate("/vendor/profile")}
            >
              <i class="bi bi-arrow-left-square "> </i>
              Your Profile
            </h5>

            <h2 className="title-page" style={{ color: "white" }}>
              Edit Profile
            </h2>
            <hr />
          </Row>
          {/*  upload foto logo */}
          <Row className="row-margin mt-3 mb-3">
            <FormLogo src={profileWo.logo === "" ? LogoWo : profileWo.logo} />
          </Row>
          {/* update form */}
          <Row className="border">
            <FormProfile profileWo={profileWo} name={nameWO} email={email} />
          </Row>
          {/* upload file */}
          <Row className="border mt-3">
            <FormFile profileWo={profileWo} />
          </Row>
        </Container>
      </div>
    </>
  );
};

export default ProfileWO;
