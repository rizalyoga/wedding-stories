import { Button, Modal } from "react-bootstrap";
import swal from "sweetalert";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AlertDelete = (props) => {
  const navigate = useNavigate();
  const handleDelete = (id) => {
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    console.log(id);
    axios
      .delete(`https://weddingstories.space/package/${id}`, config)
      .then((data) => {
        console.log(data);
        swal(data.data.message);
        navigate("/vendor/packages");
      })
      .catch((err) => {
        console.log(err.message);
        swal(err.response.data.message);
      });
  };
  return (
    <>
      <Modal show={props.show} onHide={props.handleClose} backdrop="static">
        <Modal.Body>
          Are you sure want to delete "{props.packName}" package ?
        </Modal.Body>
        <Modal.Footer>
          <Button
            id="btn-close-alert"
            variant="secondary"
            onClick={(e) => props.handleClose(e)}
          >
            No
          </Button>
          <Button
            id="btn-delete-package"
            variant="primary"
            onClick={() => handleDelete(props.id)}
          >
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AlertDelete;
