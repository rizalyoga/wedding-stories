import "./profile-user.css";
import { Form, Button, Row, Spinner } from "react-bootstrap";
import NavUser from "../../components/navbar-user/navbar-user.jsx";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import allStore from "../../../store/actions/index";
// import swal from "sweetalert";
// import axios from "axios";
import { useNavigate } from "react-router-dom";

const ProfileUser = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const navigate = useNavigate();

  const [disabled, setDisabled] = useState(true);

  const dispatch = useDispatch();
  const profileUser = useSelector(({ userProfile }) => userProfile);
  const loading = useSelector(({ loading }) => loading);

  useEffect(() => {
    dispatch(allStore.ProfileUser());
    if (!localStorage.email) {
      localStorage.setItem("email", profileUser.data.Email);
    }
  }, [dispatch]);

  //GET DATA PROFILE USER
  useEffect(() => {
    setUsername(localStorage.nama);
    setEmail(localStorage.email);
  }, [profileUser]);

  // useEffect(() => {
  //   console.log(profileUser.data);
  // }, [profileUser]);

  /* -------------------------- UNLOCK ACTION DISABEL ------------------------- */

  const unlock = () => {
    setDisabled(!disabled);
  };

  /* ------------------------------- HANDLE EDIT ------------------------------ */
  const handleEdit = (event) => {
    event.preventDefault();
    dispatch(allStore.postEditUser({ name: username, email: email, password: password }));
    // console.log(username);
    // console.log(email);
    setPassword("");
  };

  /* ------------------------------ HANDLE DELETE ----------------------------- */

  // const handleDelete = () => {
  //   const token = localStorage.getItem("token");
  //   const config = {
  //     headers: { Authorization: `Bearer ${token}` },
  //   };
  //   swal({
  //     title: "Are you sure for delete the account ?",
  //     icon: "warning",
  //     buttons: true,
  //     dangerMode: true,
  //   }).then((willDelete) => {
  //     if (willDelete) {
  //       axios
  //         .delete("https://weddingstories.space/users/profile", config)
  //         .then((response) => {
  //           localStorage.removeItem("token");
  //           if (response.data.data !== null) {
  //             navigate("/");
  //           }
  //           window.location.reload();
  //         })
  //         .catch((err) => {
  //           console.log("3, Masuk ERROR:", err);
  //           swal(err.response.data.message);
  //           // allStore.setError(err.response.data.message);
  //           // dispatch(allStore.setError(err.response.data.message));
  //         });
  //       swal("Data Sukses dihapus", {
  //         icon: "success",
  //       });
  //     } else {
  //       swal("Data tidak jadi dihapus");
  //     }
  //   });
  // };

  /* --------------------------------- LOADING -------------------------------- */
  if (loading) {
    return (
      <>
        <NavUser />
        <Spinner className="spinner" animation="border" />
      </>
    );
  }

  return (
    <div style={{ backgroundColor: "#5C7893", paddingTop: "5%", paddingBottom: "5%" }}>
      <NavUser />
      <div className="container">
        <div className="form-edit">
          <h1 className="text-center text-white mb-5 fw-bold">YOUR PROFILE</h1>
          <Form>
            <Row>
              <div className="Room d-flex flex-column">
                <Button className="mb-3 unlock-edit" id="enable-edit-profile" onClick={() => unlock()}>
                  Click for edit profile
                </Button>
                <div className="mb-3 d-flex flex-column text-white" controlId="username">
                  <Form.Label>Username</Form.Label>
                  <Form.Control disabled={disabled} id="username-profile-user" className="input-register" placeholder="username" autoComplete="off" value={username} onChange={(event) => setUsername(event.target.value)} required />
                </div>

                <div className="mb-3 d-flex flex-column text-white" controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control disabled={disabled} id="email-profile-user" className="input-register" placeholder="Email" type="email" value={email} autoComplete="off" onChange={(event) => setEmail(event.target.value)} required />
                </div>

                <div className="mb-1 d-flex flex-column text-white" controlId="password">
                  <Form.Label>password</Form.Label>
                  <p className="d-flex justify-content-center align-items-center">
                    <Form.Control id="password" id="password-profile-user" disabled={disabled} placeholder="password" type="password" value={password} onChange={(event) => setPassword(event.target.value)} required autoComplete="off" />
                  </p>
                </div>
                <div className="button-edit">
                  <Button className="w-35" id="edit-profile" style={{ border: "#A5BED1", backgroundColor: "#A5BED1" }} disabled={disabled} onClick={(event) => handleEdit(event)}>
                    Edit
                  </Button>
                  {/* <Button className="w-35 ms-2 bg-danger" id="delete-user" style={{ border: "#DC3545" }} disabled={disabled} onClick={() => handleDelete()}> */}
                  {/* delete */}
                  {/* </Button> */}
                </div>
              </div>
            </Row>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ProfileUser;
