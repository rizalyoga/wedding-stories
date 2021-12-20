import { Container, Row, Col, Card, Button, Tooltip, OverlayTrigger, Spinner, Modal, Alert } from "react-bootstrap";
import NavLoginWo from "../../../components/navbar-wo/navbar-wo-login";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import AlertDelete from "./alertModal";
import swal from "sweetalert";
import "./listPackage.css";
import axios from "axios";

const ListPackage = () => {
  const [pack, setPack] = useState([]);
  const [loading, setLoading] = useState(false);
  const [ID, setID] = useState("");
  const [packName, setPackName] = useState("");
  // alert delete
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    console.log(ID, packName);
    // return;
    if (show) {
      return (
        <Modal show={show} onHide={handleClose} backdrop="static">
          <Modal.Body>Are you sure want to delete "{packName}" package?</Modal.Body>
          <Modal.Footer>
            <Button id="btn-close-alert" variant="secondary" onClick={(e) => handleClose(e)}>
              No
            </Button>
            <Button id="btn-delete-package" variant="primary" onClick={() => handleDelete(ID)}>
              Yes
            </Button>
          </Modal.Footer>
        </Modal>
      );
    }

    return <></>;
  };
  const navigate = useNavigate();

  const checkPack = () => {
    if (pack.length === 0) {
      return (
        <>
          <Alert variant="warning">You have no data.</Alert>
          {/* <h3>You have no data.</h3> */}
        </>
      );
    }
    return <></>;
  };

  const handleEdit = (id) => {
    navigate(`/vendor/packages/edit/${id}`);
  };

  useEffect(() => {
    console.log(pack);
  }, [pack]);

  useEffect(() => {
    setLoading(true);
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    axios
      .get("https://weddingstories.space/package/my", config)
      .then(({ data }) => {
        // console.log(data.data);
        setPack(data.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

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
        setShow(false);
        window.location.reload();
      })
      .catch((err) => {
        const online = window.ononLine;
        console.log(err.message);

        window.ononline = (event) => {};
        if (online) {
          console.log("Back Online");
          swal(err.reponse.data.message);
        } else if (!online) {
          swal(err.message);
        }
      });
  };

  if (loading) {
    return (
      <>
        <NavLoginWo />
        <Spinner className="spinner" animation="border" />
      </>
    );
  }

  return (
    <>
      <NavLoginWo />
      <div className="list-package">
        <Container className="mb-5 mt-5">
          <Row>
            <h2 className="title-page">Your Packages</h2>
            <hr />
          </Row>
          <Button id="nav-form-add-package" variant="primary" className="mb-3 mt-3 btn-submit" onClick={() => navigate("/vendor/packages/add")}>
            <i class="bi bi-plus-square"> </i>
            New Package
          </Button>
          {checkPack()}
          <Row xs={1} md={2} className="g-4">
            {!pack ? (
              <></>
            ) : (
              pack.map((el, idx) => (
                <Col>
                  <Card className="card-package">
                    <Card.Img variant="top" src={el.UrlPhoto} className="photo-package" width="300px" height="200px" />
                    <Card.Body>
                      <Card.Title>
                        {" "}
                        <h5 className="pack-name">
                          <b>{el.PackageName}</b>{" "}
                        </h5>
                        <hr />
                        <h6>
                          <b>Price :</b> Rp {el.Price}
                        </h6>
                        <hr />
                        <h6>
                          <b>Pax :</b> {el.Pax}
                        </h6>
                        <hr />
                        <h6 className="description">
                          <b>Description :</b> {el.PackageDesc} Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, praesentium. Pariatur qui cumque mollitia magni molestiae sequi sit harum, blanditiis nisi maxime omnis vel
                          iste accusantium error, nemo perspiciatis? Libero?
                        </h6>
                        <hr />
                      </Card.Title>
                      <Card.Text>
                        <Row>
                          <div className="col-8">
                            {/* <OverlayTrigger
                            key="bottom"
                            placement="bottom"
                            overlay={
                              <Tooltip id="tooltip-bottom">details</Tooltip>
                            }
                          >
                            <i className="bi bi-journal-text m-3 cursor"></i>
                          </OverlayTrigger> */}
                          </div>
                          <div className="col-2">
                            <OverlayTrigger key="bottom" placement="bottom" overlay={<Tooltip id="tooltip-bottom">edit</Tooltip>}>
                              <i class="bi bi-pencil-square m-3 cursor" onClick={() => handleEdit(el.ID)}></i>
                            </OverlayTrigger>
                          </div>
                          <div className="col-2">
                            <OverlayTrigger key="bottom" placement="bottom" overlay={<Tooltip id="tooltip-bottom">delete</Tooltip>}>
                              <i
                                class="bi bi-trash m-3 cursor"
                                onClick={() => {
                                  setShow(true);
                                  setID(el.ID);
                                  setPackName(el.PackageName);
                                  // handleShow(el.ID, el.PackageName);
                                }}
                              ></i>
                            </OverlayTrigger>
                            {/* <AlertDelete
                            handleClose={() => handleClose()}
                            show={show}
                            packName={packName}
                            id={ID}
                          /> */}
                          </div>
                        </Row>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            )}
          </Row>
        </Container>
      </div>
      {handleShow()}
    </>
  );
};

export default ListPackage;
