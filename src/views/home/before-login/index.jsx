import "./home.css";
import image from "../../../assets/download.jpeg";
import NavUser from "../../components/navbar-user/navbar-user.jsx";
import Banner from "../../components/banner/banner.jsx";
import Reason from "../../components/reason/reason.jsx";
// import NavLoginUser from "../../components/navbar-user/navbar-user-login.jsx";
// import NavWo from "../../components/navbar-wo/navbar-wo-login.jsx";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <NavUser />
      {/* <NavWo /> */}
      {/* <NavLoginUser /> */}
      <Banner />
      <Reason />
      <div className="list-wo container-list-wo">
        <div className="container">
          <h2 className="fw-bold">Wedding Planner di Indonesia</h2>
          <div className="row-card my-5">
            <div className="card-wo my-2 " onClick={() => navigate("/detail/package")}>
              <div className="images">
                <img style={{ borderRadius: "10px" }} src={image} alt="product" />
              </div>
              <div className="name-wo fw-bold">All inclusive Package for 100 Person</div>
              <div className="desc-packages d-flex justify-content-between">
                <div className="price">Rp 100.000.000,00</div>
                <div className="rate" style={{ color: "#5C7893" }}>
                  4.5
                </div>
              </div>
            </div>

            <div className="card-wo my-2 " onClick={() => navigate("/detail/package")}>
              <div className="images">
                <img style={{ borderRadius: "10px" }} src={image} alt="product" />
              </div>
              <div className="name-wo fw-bold">All inclusive Package for 100 Person</div>
              <div className="desc-packages d-flex justify-content-between">
                <div className="price">Rp 100.000.000,00</div>
                <div className="rate" style={{ color: "#5C7893" }}>
                  4.5
                </div>
              </div>
            </div>

            <div className="card-wo my-2 " onClick={() => navigate("/detail/package")}>
              <div className="images">
                <img style={{ borderRadius: "10px" }} src={image} alt="product" />
              </div>
              <div className="name-wo fw-bold">All inclusive Package for 100 Person</div>
              <div className="desc-packages d-flex justify-content-between">
                <div className="price">Rp 100.000.000,00</div>
                <div className="rate" style={{ color: "#5C7893" }}>
                  4.5
                </div>
              </div>
            </div>

            <div className="card-wo my-2 " onClick={() => navigate("/detail/package")}>
              <div className="images">
                <img style={{ borderRadius: "10px" }} src={image} alt="product" />
              </div>
              <div className="name-wo fw-bold">All inclusive Package for 100 Person</div>
              <div className="desc-packages d-flex justify-content-between">
                <div className="price">Rp 100.000.000,00</div>
                <div className="rate" style={{ color: "#5C7893" }}>
                  4.5
                </div>
              </div>
            </div>

            <div className="card-wo my-2 " onClick={() => navigate("/detail/package")}>
              <div className="images">
                <img style={{ borderRadius: "10px" }} src={image} alt="product" />
              </div>
              <div className="name-wo fw-bold">All inclusive Package for 100 Person</div>
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
    </>
  );
};

export default Home;
