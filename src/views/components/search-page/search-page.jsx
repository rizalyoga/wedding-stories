import "../../home/before-login/home.css";
import NavUser from "../../components/navbar-user/navbar-user.jsx";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
// import allStore from "../../../store/actions/index.js";
import { Spinner } from "react-bootstrap";

const Home = () => {
  const navigate = useNavigate();
  //   const dispatch = useDispatch();

  const searchPackage = useSelector(({ searchPackage }) => searchPackage);
  const loading = useSelector(({ loading }) => loading);

  useEffect(() => {
    // console.log(typeof searchPackage);
  }, [searchPackage]);

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

  if (searchPackage.length === 0) {
    return (
      <>
        <NavUser />
        <h1
          className="text-center"
          style={{ paddingTop: "20%", height: "80vh", color: "#bdbdbd" }}
        >
          <i className="bi bi-emoji-frown"> </i>
          Package Not Found
        </h1>
      </>
    );
  } else {
    return (
      <>
        <NavUser />
        {/* <NavWo /> */}
        {/* <NavLoginUser /> */}
        <div
          className="list-wo container-list-wo"
          style={{ paddingBottom: "15%" }}
        >
          <div className="container">
            <h2 className="fw-bold">Wedding Planner di Indonesia</h2>
            <div className="row-card" style={{ paddingTop: "6%" }}>
              {searchPackage.map((el, index) => (
                <div
                  className="card-wo my-2 "
                  id="card-package-landing-page"
                  onClick={() => goToDetail(el.package_id)}
                  key={index}
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
                    {/* <div className="rate" style={{ color: "#5C7893" }}>
                      4.5
                    </div> */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default Home;
