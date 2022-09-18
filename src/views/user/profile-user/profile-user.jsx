import "./profile-user.css";
import { Form, Button, Row, Spinner } from "react-bootstrap";
import NavUser from "../../components/navbar-user/navbar-user.jsx";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import allStore from "../../../store/actions/index";
import swal from "sweetalert";
// import axios from "axios";

const ProfileUser = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [disabled, setDisabled] = useState(true);

  const dispatch = useDispatch();
  const profileUser = useSelector(({ userProfile }) => userProfile);
  const loading = useSelector(({ loading }) => loading);

  //GET DATA PROFILE USER
  useEffect(() => {
    setUsername(sessionStorage.nama);
    setEmail(sessionStorage.email);
  }, [profileUser]);

  /* -------------------------- UNLOCK ACTION DISABEL ------------------------- */

  const unlock = () => {
    setDisabled(!disabled);
  };

  /* ------------------------------- HANDLE EDIT ------------------------------ */
  const handleEdit = (event) => {
    event.preventDefault();
    if (password.length < 8) {
      swal("password cannot less than 8 characters", {
        icon: "warning",
        buttons: false,
        timer: 1500,
      });
    } else if (password.includes(" ")) {
      swal("password cannot contain space character", {
        icon: "warning",
        buttons: false,
        timer: 1500,
      });
    } else if (!email.includes("@")) {
      swal("please check your email format", {
        icon: "warning",
        buttons: false,
        timer: 1500,
      });
    } else {
      swal({
        text: "Are you sure to edit Profile ?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willEdit) => {
        if (willEdit) {
          dispatch(
            allStore.postEditUser({
              name: username,
              email: email,
              password: password,
            })
          );
        }
        setPassword("");
      });
    }
  };

  /* ------------------------------ HANDLE DELETE ----------------------------- */

  // const handleDelete = () => {
  //   const token = sessionStorage.getItem("token");
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
  //           sessionStorage.removeItem("token");
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

  const showPassword = () => {
    const x = document.getElementById("password-profile-user");
    if (x.type === "password") {
      x.type = "text";
      document.getElementById("togglePassword").style.color = "red";
    } else {
      x.type = "password";
      document.getElementById("togglePassword").style.color = "black";
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#5C7893",
        paddingTop: "5%",
        paddingBottom: "5%",
      }}
    >
      <NavUser />
      <div className="container">
        <div className="form-edit">
          <h1 className="text-center text-white mb-5 fw-bold">YOUR PROFILE</h1>
          <Form>
            <Row>
              <div className="Room d-flex flex-column">
                <Button
                  className="mb-3 unlock-edit"
                  id="enable-edit-profile"
                  onClick={() => unlock()}
                >
                  Click for edit profile
                </Button>
                <div
                  className="mb-3 d-flex flex-column text-white"
                  controlId="username"
                >
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    disabled={disabled}
                    id="username-profile-user"
                    className="input-register p-2"
                    placeholder="username"
                    autoComplete="off"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                    required
                  />
                </div>

                <div
                  className="mb-3 d-flex flex-column text-white"
                  controlId="email"
                >
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    disabled={disabled}
                    id="email-profile-user"
                    className="input-register p-2"
                    placeholder="Email"
                    type="email"
                    value={email}
                    autoComplete="off"
                    onChange={(event) => setEmail(event.target.value)}
                    required
                  />
                </div>

                <div
                  className="mb-2 d-flex flex-column text-white"
                  controlId="password"
                >
                  <Form.Label>password</Form.Label>
                  <p className="d-flex justify-content-center align-items-center">
                    <Form.Control
                      id="password"
                      style={{ marginLeft: "-10px" }}
                      id="password-profile-user"
                      disabled={disabled}
                      placeholder="password"
                      type="password"
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                      required
                      autoComplete="off"
                    />
                    <i
                      style={{
                        marginLeft: "-25px",
                        color: "black",
                        cursor: "pointer",
                      }}
                      className="bi bi-eye-slash fw-1"
                      id="togglePassword"
                      onClick={() => showPassword()}
                    ></i>
                  </p>
                </div>
                <div className="button-edit">
                  <Button
                    className="w-100 p-2"
                    id="edit-profile"
                    style={{ border: "#A5BED1", backgroundColor: "#A5BED1" }}
                    disabled={disabled}
                    onClick={(event) => handleEdit(event)}
                  >
                    Edit
                  </Button>
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
