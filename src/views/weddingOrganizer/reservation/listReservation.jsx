import { Container, Accordion, Row, Col, Button, Spinner, Alert, Modal } from "react-bootstrap";
import NavLoginWo from "../../components/navbar-wo/navbar-wo-login";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import allStore from "../../../store/actions/index.js";
import axios from "axios";
import swal from "sweetalert";
import "./listReservation.css";
import { useNavigate } from "react-router-dom";

const ListReservation = () => {
  const dispatch = useDispatch();
  const listOrder = useSelector(({ myOrder }) => myOrder.reverse());

  const [loading, setLoading] = useState(false);
  const [order, setOrder] = useState([]);
  const [status, setStatus] = useState("");
  const [ID, setID] = useState("");
  const [buttonSelected, setButtonSelected] = useState("");
  const navigate = useNavigate();

  /* --------------------------- GET DETAIL PACKAGE --------------------------- */

  useEffect(() => {
    dispatch(allStore.getMyOrder());
  }, [dispatch, listOrder]);

  // alert accept/decline
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    console.log(status, buttonSelected);
    // return;
    if (show) {
      return (
        <Modal show={show} onHide={handleClose} backdrop="static">
          <Modal.Body>Are you sure want to "{buttonSelected}" this order?</Modal.Body>
          <Modal.Footer>
            <Button id="btn-close-alert" variant="secondary" onClick={(e) => handleClose(e)}>
              No
            </Button>
            <Button
              id="btn-delete-package"
              variant="primary"
              onClick={() => {
                handleStatusOrder();
              }}
            >
              Yes
            </Button>
          </Modal.Footer>
        </Modal>
      );
    }

    return <></>;
  };

  //update status Order
  const handleStatusOrder = () => {
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    const body = {
      status_order: status,
    };
    console.log(body, config, ID);
    // return;
    axios
      .put(`https://weddingstories.space/order/status/${ID}`, body, config)
      .then((data) => {
        console.log(data);

        // navigate("/vendor/reservations");
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

  useEffect(() => {
    setLoading(true);
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    // console.log(order.length);
    axios
      .get("https://weddingstories.space/order/organizer/my", config)
      .then(({ data }) => {
        console.log(data.data);
        setOrder(data.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

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

  const checkOrder = () => {
    if (order.length === 0) {
      return (
        <>
          <Alert variant="warning">You have no data.</Alert>
          {/* <h3>You have no data.</h3> */}
        </>
      );
    }

    return <></>;
  };

  const showButton = (recentStatus, id) => {
    if (recentStatus === "waiting") {
      return (
        <>
          <Col md={2} sm={12}>
            <Button
              id="accept"
              md={12}
              sm={6}
              className="m-2"
              variant="success"
              onClick={(e) => {
                setShow(true);
                setID(id);
                setStatus("accept");
                setButtonSelected("Accept");
              }}
            >
              Accept
            </Button>
            <Button
              id="decline"
              md={12}
              sm={6}
              className="m-2"
              variant="danger"
              onClick={(e) => {
                setShow(true);
                setID(id);
                setStatus("decline");
                setButtonSelected("Decline");
              }}
            >
              Decline
            </Button>
          </Col>
        </>
      );
    }

    return <></>;
  };
  return (
    <>
      <NavLoginWo></NavLoginWo>
      <div className="list-reserve">
        <Container className="mt-5 mb-5">
          <Row>
            <h2 className="title-page" style={{ color: "white" }}>
              Order List
            </h2>
            <hr />
          </Row>
          {checkOrder()}
          {handleShow()}
          {!listOrder ? (
            <Row>
              <Col md={3}>
                <Alert variant="warning">You have no data.</Alert>
              </Col>
            </Row>
          ) : (
            listOrder.map((el, idx) => (
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <Row>
                      <Col>
                        {el.Name} · {el.PackageName} · {el.Status_Order}
                      </Col>
                      {/* <Col md={6} style={{ color: "darkyellow" }}>
                      waiting
                    </Col> */}
                    </Row>
                  </Accordion.Header>
                  <Accordion.Body>
                    <Row>
                      <Col md={1}></Col>
                      <Col md={5} sm={12}>
                        <h7>
                          <b>Client Name :</b> {el.Name}
                        </h7>
                        <br />
                        <h7>
                          <b>Package Name :</b> {el.PackageName}
                        </h7>
                        <br />
                        <h7>
                          <b>Date :</b> {el.Date}
                        </h7>
                        <br />
                        <h7>
                          <b>Total Pax :</b> {el.Total_Pax}
                        </h7>
                        <br />
                        <h7>
                          <b>Additional :</b> {el.Additional}
                        </h7>
                        <br />
                      </Col>
                      <Col md={4}>
                        <h7>
                          <b>Status Order :</b> {el.Status_Order}
                        </h7>
                        <br />
                        <h7>
                          <b>Status Payment :</b> {el.Status_Payment}
                        </h7>
                        <br />
                      </Col>
                      {showButton(el.Status_Order, el.ID)}
                    </Row>
                  </Accordion.Body>
                </Accordion.Item>
                <br />
              </Accordion>
            ))
          )}
        </Container>
      </div>
    </>
  );
};

export default ListReservation;
