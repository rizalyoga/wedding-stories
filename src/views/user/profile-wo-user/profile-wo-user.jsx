import "../../weddingOrganizer/profile-wo/profile-wo.css";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

// Store
import allStore from "../../../store/actions/index.js";

// Component
import NavUser from "../../components/navbar-user/navbar-user.jsx";
import Card from "../../components/card/card";
import { Spinner } from "react-bootstrap";

const ProfileWO = () => {
  const dispatch = useDispatch();

  const detailWo = useSelector(({ detailWo }) => detailWo);
  const { id } = useParams();
  const loading = useSelector(({ loading }) => loading);

  // GET PROFILE WO
  useEffect(() => {
    dispatch(allStore.getDetailWo(id));
  }, [dispatch, id]);

  // GET ALL PACKAGE WO
  const allPackage = useSelector(({ getAllPackage }) => getAllPackage);

  useEffect(() => {
    dispatch(allStore.getAllPackage());
  }, [dispatch]);

  // LOADING COMPONENT
  if (loading) {
    return (
      <>
        <NavUser />
        <Spinner className="spinner" animation="border" />
      </>
    );
  }

  return (
    <div>
      <NavUser />
      <div className="profile-user">
        <div className="container">
          <div className="content-header">
            <div className="image-logo">
              <img src={detailWo[0]?.logo} alt="logo-wo" />
            </div>
            <div className="content-wo">
              <h2 className="fw-bold">{detailWo[0]?.WoName}</h2>
              <div className="content-address d-flex mb-1">
                <i className="bi bi-geo-alt me-1"></i>
                <div className="address d-flex">
                  <h6 className="me-1">{detailWo[0]?.city},</h6>
                  <h6>{detailWo[0]?.address}</h6>
                </div>
              </div>
              <div className="contact d-flex">
                <div className="phone d-flex">
                  <i
                    style={{ marginTop: "-2px", color: "#2CB040" }}
                    className="bi bi-whatsapp me-1 mb-2"
                  ></i>
                  <h6 className="me-2" style={{ color: "#606060" }}>
                    {detailWo[0]?.PhoneNumber}
                  </h6>
                </div>
                <div className="mail d-flex">
                  <i
                    style={{ marginTop: "-2px", color: "#E34133" }}
                    className="bi bi-envelope me-1"
                  ></i>
                  <h6 className="me-2" style={{ color: "#606060" }}>
                    {detailWo[0]?.email}
                  </h6>
                </div>
                <div className="website d-flex">
                  <i
                    style={{ marginTop: "-2px", color: "#5C7893" }}
                    className="bi bi-globe2 me-2"
                  ></i>
                  <h6 className="me-2" style={{ color: "#606060" }}>
                    {detailWo[0]?.weburl === "" ? "-" : detailWo[0]?.weburl}
                  </h6>
                </div>
              </div>
              <div className="status">
                <h6 className="text-center">
                  {detailWo[0]?.status ? "Active" : "Not Active"}
                </h6>
              </div>
            </div>
          </div>
          <hr className="mt-5" />
          <div className="desc">
            <h5 className="fw-bold">Description Wedding Organizer</h5>
            <hr />
            <p>{detailWo[0] === "" ? "No Description" : detailWo[0]?.about}</p>
            <hr />
            <h5 className="fw-bold">List Packages</h5>
            <div className="list-packages mt-5">
              {allPackage && <Card packageData={allPackage} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileWO;
