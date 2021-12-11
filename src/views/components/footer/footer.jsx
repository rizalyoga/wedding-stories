import "./footer.css";
import logo from "../../../assets/virus.png";

const Footer = () => {
  return (
    <div>
      <hr />
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
              <small>Free Trial</small>
            </div>
          </div>
          <div className="footer-right-col">
            <div className="footer-logo">
              <img src={logo} alt="logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
