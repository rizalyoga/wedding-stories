import "./home.css";
// import image from "../../../assets/download.jpeg";
import NavUser from "../../components/navbar-user/navbar-user.jsx";
import Banner from "../../components/banner/banner.jsx";
import Reason from "../../components/reason/reason.jsx";
// import NavLoginUser from "../../components/navbar-user/navbar-user-login.jsx";
// import NavWo from "../../components/navbar-wo/navbar-wo-login.jsx";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import allStore from "../../../store/actions/index.js";
import { Spinner } from "react-bootstrap";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const allPackage = useSelector(({ getAllPackage }) => getAllPackage);
  const loading = useSelector(({ loading }) => loading);

  useEffect(() => {
    dispatch(allStore.getAllPackage());
  }, [dispatch]);

  // useEffect(() => {
  //   console.log(typeof allPackage, "INI ALL PACKAET");
  //   console.log(allPackage, "INI ALL PACKAET");
  // }, [allPackage]);

  const formatRupiah = (money) => {
    return new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 }).format(money);
  };

  if (loading) {
    return (
      <>
        <NavUser />
        <Spinner className="spinner" animation="border" />
      </>
    );
  }

  const goToDetail = (id) => {
    navigate(`/detail/package/${id}`);
  };

  return (
    <>
      <NavUser />
      {/* <NavWo /> */}
      {/* <NavLoginUser /> */}
      <Banner />
      <Reason />
      <div className="list-wo container-list-wo">
        <div className="container">
          <h2 className="fw-bold">Wedding Planner in Indonesia</h2>
          <div className="row-card my-5">
            {!allPackage ? (
              <></>
            ) : (
              allPackage.map((el, index) => (
                <div className="card-wo my-2 " id="card-package-landing-page" onClick={() => goToDetail(el.ID)} key={index}>
                  <div className="images">
                    <img style={{ borderRadius: "10px" }} src={el.UrlPhoto} alt="product" />
                  </div>
                  <div className="name-wo fw-bold mt-1" id="name-wo" style={{ overflow: "hidden", textOverflow: "ellipsis", height: "25px" }}>
                    {el.PackageName}
                  </div>
                  <div className="desc-packages d-flex justify-content-between">
                    <div className="price">{formatRupiah(el.Price) + ",00"}</div>
                    {/* <div className="rate" style={{ color: "#5C7893" }}>
                      <i style={{ color: "#B0C3D6" }} className="bi bi-star-fill"></i>
                    </div> */}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
