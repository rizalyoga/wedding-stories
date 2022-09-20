import "./home.css";
import NavUser from "../../components/navbar-user/navbar-user.jsx";
import Banner from "../../components/banner/banner.jsx";
import Reason from "../../components/reason/reason.jsx";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import allStore from "../../../store/actions/index.js";
import { Spinner } from "react-bootstrap";

// Package-Image
// import wedding1 from "../../../assets/weddings/wedding-1.jpg";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const allPackage = useSelector(({ getAllPackage }) => getAllPackage);
  const loading = useSelector(({ loading }) => loading);

  useEffect(() => {
    dispatch(allStore.getAllPackage());
  }, [dispatch]);

  const formatRupiah = (money) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(money);
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

      <Banner />
      <Reason />
      <div className="list-wo container-list-wo">
        <div className="container">
          <h2 className="fw-bold">Wedding Packages in Indonesia</h2>
          <div className="row-card my-5">
            {!allPackage ? (
              <></>
            ) : (
              allPackage.map((el) => (
                <div
                  className="card-wo my-2 "
                  id="card-package-landing-page"
                  onClick={() => goToDetail(el.package_id)}
                  key={el.package_id}
                >
                  <div className="images">
                    <img
                      style={{ borderRadius: "10px" }}
                      src={el.UrlPhoto}
                      alt="product"
                    />
                  </div>
                  <div
                    className="name-wo fw-bold mt-1"
                    id="name-wo"
                    style={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      height: "25px",
                    }}
                  >
                    {el.PackageName}
                  </div>
                  <div className="desc-packages d-flex justify-content-between">
                    <div className="price">
                      {formatRupiah(el.Price) + ",00"}
                    </div>
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
