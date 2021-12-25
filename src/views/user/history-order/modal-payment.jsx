import "./modal-payment.css";
import { Modal, Button, Form } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";
import logo from "../../../assets/virus.png";
import bank from "../../../assets/bank/bank.png";
import swal from "sweetalert";
import allStore from "../../../store/actions/index.js";

const ModalPayment = (props) => {
  const [file, setFile] = useState();
  const [preview, setPreview] = useState(null);

  const dispatch = useDispatch();
  /* ----------------------------- HANDLING ERROR ----------------------------- */

  const onImageUpload = (event) => {
    console.log(event.target.files[0]);
    const images = event.target.files[0];
    setFile(event.target.files[0]);
    setPreview(URL.createObjectURL(images));
  };

  const id_order = props.id_order;

  const handleSubmit = (event) => {
    event.preventDefault();
    if (file.size > 3e6) {
      swal("Your file more than 3MB");
    } else {
      // console.log("file", file);
      // console.log(props.id_order);
      const data = new FormData();
      data.append("reservationid", id_order);
      data.append("invoice", file);

      dispatch(allStore.postPayment(data));
      setFile();
      setPreview();
    }
  };

  return (
    <div>
      <Modal {...props} size="lg" aria-labelledby="example-modal-sizes-title-lg-center" centered>
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg"></Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body-payment">
          <div className="logo-header">
            <img src={logo} alt="logo-weeding" />
            <p>Wedding Stories</p>
          </div>
          <div className="rekening">
            <div className="logo-bank">
              <img src={bank} alt="logo-bank" />
            </div>
          </div>
          <div className="body-preview">{file ? <img className="preview-images" src={preview} alt="preview-image" /> : <i class="bi bi-cloud-arrow-up"></i>}</div>
          <Form onSubmit={(event) => handleSubmit(event)}>
            <Form.Control
              type="file"
              placeholder="choose your image"
              accept="image/png, image/jpg, image/jpeg, image/bnp, image/heic, application/pdf"
              onChange={(event) => {
                onImageUpload(event);
              }}
              required
            />
            {/* <Form.Control.Feedback type="invalid">{errors.photo}</Form.Control.Feedback> */}
            <h7>file type: jpg/jpeg/png/heic/pdg · max size: 3 MB</h7>
            <div className="button-submit-payment">
              <Button size="sm" type="submit" id="submit-payment">
                Submit
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ModalPayment;
