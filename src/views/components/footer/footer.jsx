import "./footer.css";
import logo from "../../../assets/virus-2.png";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div>
      <hr style={{ marginTop: "-1px" }} />
      <div className="container">
        <div className="foo-ter">
          <div className="footer-left-col d-flex">
            <div className="link-title mx-3 mb-3">
              <h4>Product</h4>
              <small>Organizer</small>
              <br />
              <small>Wedding</small>
            </div>
            <div className="link-title mx-3 mb-3">
              <h4>About us</h4>
              <small>Website</small>
            </div>
            <div className="link-title mx-3 mb-3">
              <h4>Business</h4>
              <small>Our Plan</small>
              <br />
              <small>Location</small>
            </div>
            <div className="link-title mx-3 mb-3">
              <h4>Contact</h4>
              <small>Social media</small>
              <br />
              <small id="admin-login" onClick={() => navigate("/admin/login")}>
                Admin
              </small>
            </div>
          </div>
          <div className="footer-right-col">
            <div className="footer-logo" style={{ cursor: "pointer" }}>
              <img onClick={() => navigate("/")} src={logo} alt="logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
