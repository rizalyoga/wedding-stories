import "./reason.css";
import easy from "../../../assets/reason/easy-to-use.png";
import reliable from "../../../assets/reason/reliability.png";
import target from "../../../assets/reason/target.png";

const Reason = () => {
  return (
    <div>
      <div className="container">
        <div className="reason">
          <h2 className="text-center my-5 fw-bold">Kenapa harus weeding day</h2>
        </div>
        <div className="card-reason">
          <div className="row-reason">
            <div className="reason-col">
              <img style={{ width: "80px" }} src={target} alt="target" />
              <h4>Interact realtime with potential clients</h4>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae possimus quo eligendi voluptas iste in quos , est blanditiis!</p>
            </div>
            <div className="reason-col">
              <img style={{ width: "80px" }} src={reliable} alt="reliable" />
              <h4>Reliable</h4>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae possimus quo eligendierror molestias nam doloremque cum nemo, est blanditiis!</p>
            </div>
            <div className="reason-col">
              <img style={{ width: "80px" }} src={easy} alt="easy" />
              <h4>Easy to Use</h4>
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
