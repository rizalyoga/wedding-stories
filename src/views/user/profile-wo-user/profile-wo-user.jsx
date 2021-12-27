import "../../weddingOrganizer/profile-wo/profile-wo.css";
import NavUser from "../../components/navbar-user/navbar-user.jsx";
// import LogoWo from "../../../assets/covid.jpg";
import logoWo from "../../../assets/unknown.png";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import allStore from "../../../store/actions/index.js";
import { Spinner } from "react-bootstrap";

const ProfileWO = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const detailWo = useSelector(({ detailWo }) => detailWo);
  const { id } = useParams();
  const loading = useSelector(({ loading }) => loading);

  //GET PROFILE WO
  useEffect(() => {
    dispatch(allStore.getDetailWo(id));
  }, [dispatch, id]);

  useEffect(() => {
    console.log(detailWo);
  }, [detailWo]);

  // GET ALL PACKAGE WO
  const allPackage = useSelector(({ getAllPackage }) => getAllPackage);

  useEffect(() => {
    dispatch(allStore.getAllPackage());
  }, [dispatch]);

  // useEffect(() => {
  //   console.log(allPackage);
  // }, [allPackage]);

  //LOADING
  if (loading) {
    return (
      <>
        <NavUser />
        <Spinner className="spinner" animation="border" />
      </>
    );
  }

  const idInt = parseInt(id);

  const goToDetail = (id) => {
    navigate(`/detail/package/${id}`);
  };

  //CONVER RUPIAH
  const formatRupiah = (money) => {
    return new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 }).format(money);
  };

  return (
    <div>
      <NavUser />
      <div className="profile-user">
        <div className="container">
          <div className="content-header">
            <div className="image-logo">
              <img src={detailWo.logo == "" ? logoWo : detailWo.logo} alt="logo-wo" />
            </div>
            <div className="content-wo">
              <h2 className="fw-bold">{detailWo.woname}</h2>
              <div className="content-address d-flex mb-1">
                <i className="bi bi-geo-alt me-1"></i>
                <div className="address d-flex">
                  <h6 className="me-1">{detailWo.city},</h6>
                  <h6>{detailWo.address}</h6>
                </div>
              </div>
              <div className="contact d-flex">
                <div className="phone d-flex">
                  <i style={{ marginTop: "-2px", color: "#2CB040" }} className="bi bi-whatsapp me-1 mb-2"></i>
                  <h6 className="me-2" style={{ color: "#606060" }}>
                    {detailWo.phonenumber}
                  </h6>
                </div>
                <div className="mail d-flex">
                  <i style={{ marginTop: "-2px", color: "#E34133" }} className="bi bi-envelope me-1"></i>
                  <h6 className="me-2" style={{ color: "#606060" }}>
                    {detailWo.email}
                  </h6>
                </div>
                <div className="website d-flex">
                  <i style={{ marginTop: "-2px", color: "#5C7893" }} className="bi bi-globe2 me-2"></i>
                  <h6 className="me-2" style={{ color: "#606060" }}>
                    {detailWo.weburl == "" ? "-" : detailWo.weburl}
                  </h6>
                </div>
              </div>
              <div className="status">
                <h6 className="text-center">{detailWo.status}</h6>
              </div>
            </div>
          </div>
          <hr />
          <div className="desc">
            <h5 className="fw-bold">Description Wedding Organizer</h5>
            <hr />
            <p>{detailWo.about == "" ? "No Description" : detailWo.about}</p>
            <hr />
            <h5 className="fw-bold">List Packages</h5>
            <div className="list-packages mt-5">
              {allPackage.map((el, index) => {
                if (el.Organizer_ID !== idInt) {
                  return <>{/* <h1>salah masuk BOS!!!</h1> */}</>;
                } else if (el.Organizer_ID === idInt) {
                  return (
                    <div className="card-wo my-2 " id="card-package-wo" onClick={() => goToDetail(el.ID)} key={index}>
                      <div className="images">
                        <img style={{ borderRadius: "10px" }} src={el.UrlPhoto} alt="product" />
                      </div>
                      <div className="name-wo fw-bold mt-1" id="name-wo" style={{ overflow: "hidden", textOverflow: "ellipsis", height: "25px" }}>
                        {el.PackageName}
                      </div>
                      <div className="desc-packages d-flex justify-content-between">
                        <div className="price">{formatRupiah(el.Price) + ",00"}</div>
                        {/* <div className="rate" style={{ color: "#5C7893" }}>
                          4.5
                        </div> */}
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileWO;
