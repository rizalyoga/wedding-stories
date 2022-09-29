import React, { useState } from "react";
import ModalLogin from "../modal-login/modal-login";
import { useNavigate } from "react-router-dom";
import "../navbar-user/navbar-user.css";

const BeforeLoginContent = () => {
  const [modalLoginShow, setModalLoginShow] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <div className="nav-links mt-2">
        <ModalLogin
          show={modalLoginShow}
          onHide={() => setModalLoginShow(false)}
        />
        <a
          className="sign-in"
          id="signIn-button-user"
          onClick={() => setModalLoginShow(true)}
          href
        >
          Sign in
        </a>
        <a
          className="sign-up"
          id="signUp-button-user"
          onClick={() => navigate("/user/register")}
          href
        >
          Sign up
        </a>
      </div>
    </>
  );
};

export default BeforeLoginContent;
