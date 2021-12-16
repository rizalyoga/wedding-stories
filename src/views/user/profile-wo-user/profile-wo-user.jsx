import "./profile-wo-user.css";
import NavUser from "../../components/navbar-user/navbar-user.jsx";
import LogoWo from "../../../assets/covid.jpg";
import ImageCard from "../../../assets/2.jpeg";
import { useNavigate } from "react-router-dom";

const ProfileWO = () => {
  const navigate = useNavigate();
  return (
    <div>
      <NavUser />
      <div className="profile-user">
        <div className="container">
          <div className="content-header">
            <div className="image-logo">
              <img src={LogoWo} alt="logo-wo" />
            </div>
            <div className="content-wo">
              <h2 className="fw-bold">Covid Wedding Plan</h2>
              <div className="content-address d-flex mb-1">
                <i className="bi bi-geo-alt me-1"></i>
                <h6>Jakarta,</h6>
                <h6>Jalan Merdeka No.47</h6>
              </div>
              <div className="contact d-flex">
                <div className="phone d-flex">
                  <i style={{ marginTop: "-2px", color: "#2CB040" }} className="bi bi-whatsapp me-1 mb-2"></i>
                  <h6 className="me-2" style={{ color: "#606060" }}>
                    0812928912031
                  </h6>
                </div>
                <div className="mail d-flex">
                  <i style={{ marginTop: "-2px", color: "#E34133" }} className="bi bi-envelope me-1"></i>
                  <h6 className="me-2" style={{ color: "#606060" }}>
                    Covid-wo@mail.com
                  </h6>
                </div>
                <div className="website d-flex">
                  <i style={{ marginTop: "-2px", color: "#5C7893" }} className="bi bi-globe2 me-2"></i>
                  <h6 className="me-2" style={{ color: "#606060" }}>
                    Covid-wo.com
                  </h6>
                </div>
              </div>
              <div className="status">
                <h6 className="text-center">Not Actived</h6>
              </div>
            </div>
          </div>
          <hr />
          <div className="desc">
            <h5 className="fw-bold">Description Wedding Organizer</h5>
            <hr />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro corporis excepturi natus voluptate? Ea, accusantium ipsa. Pariatur quisquam debitis nemo inventore odio impedit voluptas, deleniti nam tempora, voluptatem beatae
              laudantium.
            </p>
            <hr />
            <h5 className="fw-bold">List Packages</h5>
            <div className="list-packages mt-5">
              <div className="card-wo my-2 " onClick={() => navigate("/detail/package")}>
                <div className="images">
                  <img style={{ borderRadius: "10px" }} src={ImageCard} alt="product" />
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
                  <img style={{ borderRadius: "10px" }} src={ImageCard} alt="product" />
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
      </div>
    </div>
  );
};

export default ProfileWO;
