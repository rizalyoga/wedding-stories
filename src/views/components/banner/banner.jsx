import "./banner.css";
import { useState } from "react";
import ModalPayment from "../../user/history-order/modal-payment.jsx";
import logoWedding from "../../../assets/virus.png";

const Banner = () => {
  // const animScroll = () => {
  //   const bg = document.getElementById("banner");
  //   window.addEventListener("scroll", function () {
  //     bg.style.backgroundSize = 160 - +window.pageYOffset / 12 + "%";
  //     bg.style.opacity = 1 - +window.pageYOffset / 700 + "";
  //   });
  // };

  const [modalShow, setModalShow] = useState(false);
  const id = "2";
  return (
    <div>
      <div className="banner" id="banner">
        <div className="container">
          <div className="text-box">
            <div className="logo-wedding">
              <img src={logoWedding} alt="logo-wedding-stories" />
            </div>
            <p style={{ fontSize: "1.2rem" }}>Wedding Stories is a comprehensive and inspiring wedding directory and marketplace that helps connect wedding organizers with brides-to-be across Indonesia.</p>
            {/* <a class="explore-btn" onClick={() => setModalShow(true)}>
            Explore
            </a> */}
            <ModalPayment show={modalShow} id_pay={id} onHide={() => setModalShow(false)} />
          </div>
        </div>
      </div>
      {/* /* ------------------------------- END-BANNER -------------------------------  */}
    </div>
  );
};

export default Banner;
