import "./footer.css";
import logo from "../../../assets/virus.png";
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
              <small>OurPlan</small>
              <br />
              <small>Free Trial</small>
            </div>
            <div className="link-title mx-3 mb-3">
              <h4>About us</h4>
              <small>OurPlan</small>
              <br />
              <small>Free Trial</small>
            </div>
            <div className="link-title mx-3 mb-3">
              <h4>Bisnis</h4>
              <small>OurPlan</small>
              <br />
              <small>Free Trial</small>
            </div>
            <div className="link-title mx-3 mb-3">
              <h4>Contact</h4>
              <small>OurPlan</small>
              <br />
              <small onClick={() => navigate("/admin/login")}>Free Trial</small>
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
