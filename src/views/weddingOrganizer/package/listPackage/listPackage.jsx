import { Container, Row, Col, Card, Button, Tooltip, OverlayTrigger, Spinner, Modal, Alert } from "react-bootstrap";
import NavLoginWo from "../../../components/navbar-wo/navbar-wo-login";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import allStore from "../../../../store/actions/index.js";
import swal from "sweetalert";
import "./listPackage.css";
import axios from "axios";

const ListPackage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const [pack, setPack] = useState([]);
  const [loading, setLoading] = useState(false);
  const [ID, setID] = useState("");
  const [packName, setPackName] = useState("");

  /* --------------------------- ALERT DELETE PACKAGE -------------------------- */
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

  /* --------------------------- CHECK MY PACKAGE WO -------------------------- */
  // const checkPack = () => {
  //   if (pack.length === 0) {
  //     return (
  //       <>
  //         <Alert variant="warning">You have no data.</Alert>
  //         {/* <h3>You have no data.</h3> */}
  //       </>
  //     );
  //   }
  //   return (
  //     <>
  //       <h3></h3>
  //     </>
  //   );
  // };

  /* --------------------------- NAVIGATE TO EDIT PAGE -------------------------- */
  const handleEdit = (id) => {
    navigate(`/vendor/packages/edit/${id}`);
  };

  /* --------------------------- GET MY PACKAGE WITH AXIOS -------------------------- */
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
        // setPack(data.data);
        // console.log(pack);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  /* --------------------------- GET LIST PACKAGE WO WITH REDUX -------------------------- */
  const myPackage = useSelector(({ myPackage }) => myPackage);
  useEffect(() => {
    dispatch(allStore.getMyPackage());
  }, [dispatch, myPackage]);

  /* --------------------------- GET LIST PROFILE WO WITH REDUX -------------------------- */
  const profileWo = useSelector(({ profileWo }) => profileWo);
  useEffect(() => {
    dispatch(allStore.fetchProfileWo());
    console.log(profileWo.status);
  }, [dispatch]);

  /* --------------------------- DELETE MY PACKAGE WO -------------------------- */
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
        // navigate("/vendor/packages");
        setShow(false);
        swal(data.data.message);
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

  /* --------------------------- LOADING -------------------------- */
  if (loading) {
    return (
      <>
        <NavLoginWo />
        <div className="spinner-bg">
          <Spinner className="spinner" animation="border" />
        </div>
      </>
    );
  }

  return (
    <>
      <NavLoginWo />
      <div className="list-package">
        <Container className="mb-5 mt-5">
          <Row>
            <h2 className="title-page" style={{ color: "white" }}>
              My Packages
            </h2>
            <hr />
          </Row>
          <Button id="nav-form-add-package" variant="primary" className="mb-3 mt-3 btn-submit" onClick={() => (profileWo.status === "Not Activated" ? swal("You need to activate your account !") : navigate("/vendor/packages/add"))}>
            <i class="bi bi-plus-square"> </i>
            New Package
          </Button>
          {/* {checkPack()} */}
          {!myPackage ? (
            <>
              <Alert variant="warning">You have no data.</Alert>
            </>
          ) : (
            <></>
          )}
          <Row xs={1} md={3} sm={2} className="g-4">
            {!myPackage ? (
              <></>
            ) : (
              myPackage.map((el, idx) => (
                <Col>
                  <Card className="card-package" id={idx}>
                    <Card.Img variant="top" src={el.UrlPhoto} className="photo-package" width="300px" height="150px" />
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
                          <b>Description :</b> {el.PackageDesc}
                        </h6>
                        <hr />
                      </Card.Title>
                      <Card.Text>
                        <Row>
                          <div className="col-7"></div>
                          <div className="col-2">
                            <OverlayTrigger key="bottom" placement="bottom" overlay={<Tooltip id="tooltip-bottom">edit</Tooltip>}>
                              <i class="bi bi-pencil-square m-3 cursor" onClick={() => handleEdit(el.ID)}></i>
                            </OverlayTrigger>
                          </div>
                          <div className="col-3">
                            <OverlayTrigger key="bottom" placement="bottom" overlay={<Tooltip id="tooltip-bottom">delete</Tooltip>}>
                              <i
                                class="bi bi-trash m-3 cursor"
                                onClick={() => {
                                  setShow(true);
                                  setID(el.ID);
                                  setPackName(el.PackageName);
                                }}
                              ></i>
                            </OverlayTrigger>
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
