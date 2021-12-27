import "./history.css";
import NavUser from "../../components/navbar-user/navbar-user-login.jsx";
import { Container, Accordion, Row, Col, Button, Spinner, Alert, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import allStore from "../../../store/actions/index.js";
import ModalPayment from "./modal-payment.jsx";

const History = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [modalShow, setModalShow] = useState(false);
  const [id_order, setId] = useState();

  const listOrder = useSelector(({ myHistory }) => myHistory);
  const loading = useSelector(({ loading }) => loading);

  /* ------------------------------ GET HISTRORY ------------------------------ */

  useEffect(() => {
    dispatch(allStore.getHistory());
  }, [dispatch]);

  // useEffect(() => {
  //   console.log(listOrder);
  // }, [listOrder]);

  /* --------------------------------- LOADING -------------------------------- */
  if (loading) {
    return (
      <>
        <NavUser />
        <Spinner className="spinner" animation="border" />
      </>
    );
  }

  /* ----------------------------- FUNCTION DIRECT ---------------------------- */

  const goToDetail = (id) => {
    navigate(`/detail/package/${id}`);
  };

  return (
    <>
      <NavUser />

      {/* /* ---------------------------- LIST RESERVATION ----------------------------  */}
      <div className="list-reservasi">
        <Container className="mt-5 mb-5">
          <Row>
            <h2 className="title-page text-white">Your History Order</h2>
            <hr />
          </Row>
          {!listOrder ? (
            <div style={{ height: "70vh" }}>
              <Alert variant="warning">You have no data.</Alert>
            </div>
          ) : (
            listOrder
              .slice(0)
              .reverse()
              .map((el, index) => (
                <Accordion key={index}>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header id="detail-history">
                      <Row style={{ width: "100%" }}>
                        <Col className="title">
                          <h6>{el.PackageName}</h6>
                          <div className="status">
                            <div className="status-order">
                              {el.Status_Order === "waiting" ? (
                                <h6 className="fw-bold" style={{ color: "orange" }}>
                                  {el.Status_Order}
                                </h6>
                              ) : el.Status_Order === "accepted" ? (
                                <h6 className="fw-bold" style={{ color: "green" }}>
                                  {el.Status_Order}
                                </h6>
                              ) : (
                                <h6 className="fw-bold" style={{ color: "red" }}>
                                  {el.Status_Order}
                                </h6>
                              )}
                            </div>
                            <div className="ms-2" style={{ width: "30px", marginRight: "30px" }}>
                              {el.Status_Payment === "paid" ? (
                                <h6 className="fw-bold" style={{ color: "green" }}>
                                  {el.Status_Payment}
                                </h6>
                              ) : (
                                <h6 className="fw-bold" style={{ color: "red" }}>
                                  {el.Status_Payment}
                                </h6>
                              )}
                            </div>
                          </div>
                        </Col>
                        {/* <Col md={6} style={{ color: "darkyellow" }}>
                      waiting
                    </Col> */}
                      </Row>
                    </Accordion.Header>
                    <Accordion.Body>
                      <Row className="row-desc">
                        {/* /* ----------------------------- COL DESCRIPTION ----------------------------  */}
                        <Col md={1}></Col>
                        <Col md={5} sm={12} className="col-description">
                          <Table className="table-desc">
                            <tbody>
                              <tr>
                                <td>Organizer</td>
                                <td>{el.WoName}</td>
                              </tr>
                              <tr>
                                <td>Package</td>
                                <td>{el.PackageName}</td>
                              </tr>
                              <tr>
                                <td>Date Reservation</td>
                                <td>{el.Date}</td>
                              </tr>
                              <tr>
                                <td>Total pax</td>
                                <td>{el.Total_Pax}</td>
                              </tr>
                              <tr>
                                <td>Additional</td>
                                <td>{!el.Additional ? "no additional" : el.Additional}</td>
                              </tr>
                            </tbody>
                          </Table>
                        </Col>
                        <Col md={4} className="col-status">
                          <h7>
                            <b>Status Order&emsp;&emsp;&ensp;: {el.Status_Order}</b>
                          </h7>
                          <br />
                          <h7>
                            <b>Status Payment&ensp; : {el.Status_Payment}</b>
                          </h7>
                          <br />
                        </Col>

                        {/* /* ------------------------------- COL BUTTON ------------------------------- */}
                        <Col md={2} sm={12} className="col-button">
                          <Button id="detail-package-history" style={{ color: "#fff", width: "90%" }} md={12} sm={6} className="m-2 btn-submit" variant="warning" onClick={() => goToDetail(el.Package_ID)}>
                            Detail Package
                          </Button>
                          {el.Status_Order === "declined" ? (
                            <></>
                          ) : el.Status_Order === "waiting" ? (
                            <div>
                              <Alert variant="warning" className="waiting-alert">
                                waiting for organizer confirmation
                              </Alert>
                            </div>
                          ) : (
                            <Button
                              id="user-payment"
                              md={12}
                              sm={6}
                              style={{ width: "90%" }}
                              className="m-2 btn-submit"
                              variant="success"
                              onClick={() => {
                                setModalShow(true);
                                setId(el.ID);
                              }}
                            >
                              Payment
                            </Button>
                          )}
                          <ModalPayment show={modalShow} id_order={id_order} onHide={() => setModalShow(false)} />
                        </Col>
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

export default History;
