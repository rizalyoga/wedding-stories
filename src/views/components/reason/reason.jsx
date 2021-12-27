import "./reason.css";
import easy from "../../../assets/reason/easy-to-use.png";
import reliable from "../../../assets/reason/reliability.png";
import target from "../../../assets/reason/target.png";
import { useNavigate } from "react-router-dom";

const Reason = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="container">
        <div className="reason">
          <h2 className="text-center my-5 fw-bold">
            Why should wed<span onClick={() => navigate("/admin/login")}>d</span>ing stories
          </h2>
        </div>
        <div className="card-reason">
          <div className="row-reason">
            <div className="reason-col">
              <img style={{ width: "80px" }} src={target} alt="target" />
              <h5>Interact realtime with potential clients</h5>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae possimus quo eligendi voluptas iste in quos , est blanditiis!</p>
            </div>
            <div className="reason-col">
              <img style={{ width: "80px" }} src={reliable} alt="reliable" />
              <h5>Reliable</h5>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae possimus quo eligendierror molestias nam doloremque cum nemo, est blanditiis!</p>
            </div>
            <div className="reason-col">
              <img style={{ width: "80px" }} src={easy} alt="easy" />
              <h5>Easy to Use</h5>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.aliquid temporibus excepturi error molestias nam doloremque cum nemo, est blanditiis!</p>
            </div>
          </div>
        </div>
      </div>
      {/* /* ------------------------------- END-REASON -------------------------------  */}
    </div>
  );
};

export default Reason;
