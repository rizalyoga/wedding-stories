import { Button, Modal } from "react-bootstrap";

const AlertDelete = (props) => {
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
          <Button variant="primary">Yes</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AlertDelete;
