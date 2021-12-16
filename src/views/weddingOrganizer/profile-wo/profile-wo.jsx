import "./profile-wo.css";
import NavUser from "../../components/navbar-user/navbar-user.jsx";
import LogoWo from "../../../assets/unknown.png";
import ImageCard from "../../../assets/2.jpeg";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Spinner, Button } from "react-bootstrap";
import allStore from "../../../store/actions/index.js";

const ProfileWO = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const profileWo = useSelector(({ profileWo }) => profileWo);
  const loading = useSelector(({ loading }) => loading);

  useEffect(() => {
    dispatch(allStore.fetchProfileWo());
  }, [dispatch]);

  // useEffect(() => {
  //   console.log(profileWo, "JAJAAJ");
  // }, [profileWo]);

  if (loading) {
    // console.log("loading bang");
    return (
      <div className="loading d-flex justify-content-center align-items-center flex-column">
        <Spinner animation="border" />
      </div>
    );
  }

  const toEdit = () => {
    navigate("/vendor/profile/edit");
  };

  return (
    <div>
      <NavUser />
      <div className="profile-user">
        <div className="container">
          <div className="content-header">
            <div className="image-logo">
              <img
                src={profileWo.logo == "" ? LogoWo : profileWo.logo}
                alt="logo-wo"
              />
            </div>
            <div className="content-wo">
              <h2 className="fw-bold">{profileWo.woname}</h2>
              <div className="content-address d-flex mb-1">
                <i className="bi bi-geo-alt me-1"></i>
                <h6 className="me-1">{profileWo.city}, </h6>
                <h6>{profileWo.address}</h6>
              </div>
              <div className="contact d-flex">
                <div className="phone d-flex">
                  <i
                    style={{ marginTop: "-2px", color: "#2CB040" }}
                    className="bi bi-whatsapp me-1 mb-2"
                  ></i>
                  <h6 className="me-2" style={{ color: "#606060" }}>
                    {profileWo.phonenumber}
                  </h6>
                </div>
                <div className="mail d-flex">
                  <i
                    style={{ marginTop: "-2px", color: "#E34133" }}
                    className="bi bi-envelope me-1"
                  ></i>
                  <h6 className="me-2" style={{ color: "#606060" }}>
                    {profileWo.email}
                  </h6>
                </div>
                <div className="website d-flex">
                  <i
                    style={{ marginTop: "-2px", color: "#5C7893" }}
                    className="bi bi-globe2 me-2"
                  ></i>
                  <h6 className="me-2" style={{ color: "#606060" }}>
                    {profileWo.weburl == "" ? "-" : profileWo.weburl}
                  </h6>
                </div>
              </div>
              <div className="butons d-flex">
                <div className="status">
                  <h6 className="text-center">{profileWo.status}</h6>
                </div>
                <div className="buton ms-2">
                  <Button
                    id="nav-edit-profile-wo"
                    style={{ background: "#5C7893", borderColor: "#5C7893" }}
                    onClick={() => toEdit()}
                  >
                    Edit Profile
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="desc">
            <h5 className="fw-bold">Description Wedding Organizer</h5>
            <hr />
            <p>{profileWo.about == "" ? "No Description" : profileWo.about}</p>
            <hr />
            <h5 className="fw-bold">List Packages</h5>
            <div className="list-packages mt-5">
              <div
                className="card-wo my-2 "
                onClick={() => navigate("/detail/package")}
              >
                <div className="images">
                  <img
                    style={{ borderRadius: "10px" }}
                    src={ImageCard}
                    alt="product"
                  />
                </div>
                <div className="name-wo fw-bold">
                  All inclusive Package for 100 Person
                </div>
                <div className="desc-packages d-flex justify-content-between">
                  <div className="price">Rp 100.000.000,00</div>
                  <div className="rate" style={{ color: "#5C7893" }}>
                    4.5
                  </div>
                </div>
              </div>

              <div
                className="card-wo my-2 "
                onClick={() => navigate("/detail/package")}
              >
                <div className="images">
                  <img
                    style={{ borderRadius: "10px" }}
                    src={ImageCard}
                    alt="product"
                  />
                </div>
                <div className="name-wo fw-bold">
                  All inclusive Package for 100 Person
                </div>
                <div className="desc-packages d-flex justify-content-between">
                  <div className="price">Rp 100.000.000,00</div>
                  <div className="rate" style={{ color: "#5C7893" }}>
                    4.5
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileWO;
