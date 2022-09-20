import "./reason.css";
import easy from "../../../assets/reason/easy-to-use.png";
import reliable from "../../../assets/reason/reliability.png";
import target from "../../../assets/reason/target.png";
import pink_abstrack from "../../../assets/pink-abstrack.png";
import { useNavigate } from "react-router-dom";

const Reason = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="container">
        <div className="reason">
          <h2 className="text-center my-5 fw-bold">
            Why should wed
            <span onClick={() => navigate("/admin/login")}>d</span>ing stories
          </h2>
          <span className="bottom-border"></span>
        </div>
        <div className="card-reason">
          <div className="row-reason">
            <div className="reason-col">
              <img
                className="background-abstrck"
                src={pink_abstrack}
                alt="background-abstrak"
              />
              <img
                className="icon"
                style={{ width: "80px" }}
                src={target}
                alt="target"
              />
              <h5>Potential clients</h5>
              <p>
                Potential clients, ipsum dolor sit amet consectetur adipisicing
                elit. Recusandae possimus iste in quos , est blanditiis!
              </p>
            </div>
            <div className="reason-col">
              <img
                className="background-abstrck"
                src={pink_abstrack}
                alt="background-abstrak"
              />
              <img
                className="icon"
                style={{ width: "80px" }}
                src={reliable}
                alt="reliable"
              />
              <h5>Reliable</h5>
              <p>
                Reliable, ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae possimus quo eligendierror molestias.
              </p>
            </div>
            <div className="reason-col">
              <img
                className="background-abstrck"
                src={pink_abstrack}
                alt="background-abstrak"
              />
              <img
                className="icon"
                style={{ width: "80px" }}
                src={easy}
                alt="easy"
              />
              <h5>Easy to use</h5>
              <p>
                Easy to use, ipsum dolor sit amet consectetur adipisicing
                elit.aliquid temporibus excepturi error molestias nam doloremque
                cum nemo, est blanditiis!
              </p>
            </div>
          </div>
        </div>
        <hr />
      </div>
      {/* /* ------------------------------- END-REASON -------------------------------  */}
    </div>
  );
};

export default Reason;
