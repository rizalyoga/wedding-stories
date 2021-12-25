import "./banner.css";
import { useState } from "react";
import ModalPayment from "../../user/history-order/modal-payment.jsx";

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
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ea accusantium fugit amet animi quod sint labore nisi accusamus? Saepe nulla alias doloribus veritatis dolor omnis quas illo sit enim!</p>
            <a class="explore-btn" onClick={() => setModalShow(true)}>
              Explore
            </a>
            <ModalPayment show={modalShow} id_pay={id} onHide={() => setModalShow(false)} />
          </div>
        </div>
      </div>
      {/* /* ------------------------------- END-BANNER -------------------------------  */}
    </div>
  );
};

export default Banner;
