import "./home.css";
import image from "../../../assets/download.jpeg";
import NavUser from "../../components/navbar-user/navbar-user.jsx";
import Banner from "../../components/banner/banner.jsx";
import Reason from "../../components/reason/reason.jsx";
import NavLoginUser from "../../components/navbar-user/navbar-user-login.jsx";

const Home = () => {
  return (
    <>
      {/* <NavUser /> */}
      <NavLoginUser />
      <Banner />
      <Reason />
      <div className="list-wo container-list-wo">
        <h2 className="fw-bold">Wedding Planner di Indonesia</h2>
        <div className="row-card my-5">
          <div className="card-wo mx-2 my-2">
            <div className="images">
              <img style={{ borderRadius: "10px" }} src={image} alt="product" />
            </div>
            <div className="name-wo fw-bold">Amoreti Wedding Plan</div>
            <div className="rate">rate: bintang</div>
          </div>

          <div className="card-wo mx-2 my-2">
            <div className="images">
              <img style={{ borderRadius: "10px" }} src={image} alt="product" />
            </div>
            <div className="name-wo fw-bold">Amoreti Wedding Plan</div>
            <div className="rate">rate: bintang</div>
          </div>

          <div className="card-wo mx-2 my-2">
            <div className="images">
              <img style={{ borderRadius: "10px" }} src={image} alt="product" />
            </div>
            <div className="name-wo fw-bold">Amoreti Wedding Plan</div>
            <div className="rate">rate: bintang</div>
          </div>

          <div className="card-wo mx-2 my-2">
            <div className="images">
              <img style={{ borderRadius: "10px" }} src={image} alt="product" />
            </div>
            <div className="name-wo fw-bold">Amoreti Wedding Plan</div>
            <div className="rate">rate: bintang</div>
          </div>

          <div className="card-wo mx-2 my-2">
            <div className="images">
              <img style={{ borderRadius: "10px" }} src={image} alt="product" />
            </div>
            <div className="name-wo fw-bold">Amoreti Wedding Plan</div>
            <div className="rate">rate: bintang</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
