import { Container, Row, Col, Form, Button, Image } from "react-bootstrap";
import { useState } from "react";
import FormLogo from "./formLogo";
import FormProfile from "./formProfile";
import FormFile from "./formFile";
import "./profile-wo.css";
import NavWO from "../../components/navbar-wo/navbar-wo-login.jsx";

const ProfileWO = () => {
  return (
    <>
      <NavWO />
      <div className="profile-wo">
        <Container className="mb-5 mt-5">
          <Row>
            <h2 className="title-page">Your Profile</h2>
            <hr />
          </Row>
          {/*  upload foto logo */}
          <Row className="border mt-3 mb-3">
            <FormLogo />
          </Row>
          {/* update form */}
          <Row className="border">
            <FormProfile />
          </Row>
          {/* upload file */}
          <Row className="border mt-3">
            <FormFile />
          </Row>
        </Container>
      </div>
    </>
  );
};

export default ProfileWO;
