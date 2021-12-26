import "./list-payment.css";
import NavUser from "../../components/navbar-user/navbar-user.jsx";
import { Container, Accordion, Row, Col, Button, Spinner, Alert, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import allStore from "../../../store/actions/index.js";
// import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import Home from "../../home/before-login/index.jsx";

const ListPayment = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const listPayment = useSelector(({ listPayment }) => listPayment);
  const loading = useSelector(({ loading }) => loading);

  useEffect(() => {
    dispatch(allStore.getAllPayment());
  }, [dispatch]);

  useEffect(() => {
    console.log(listPayment);
  }, [listPayment]);

  if (loading) {
    return (
      <>
        <NavUser />
        <Spinner className="spinner" animation="border" />
      </>
    );
  }

  const goToDetail = (id) => {
    navigate(`/detail/package/${id}`);
  };

  if (localStorage.token && localStorage.status === "admin") {
    return (
      <div>
        <NavUser />
        <div className="list-payment">
          <Container className="mt-5 mb-5">
            <Row>
              <h4 className="title-page">List Payment User</h4>
              <hr />
            </Row>
            {!listPayment ? (
              <div style={{ height: "70vh" }}>
                <Alert variant="warning">You have no data.</Alert>
              </div>
            ) : (
              listPayment
                .slice(0)
                .reverse()
                .map((el, index) => (
                  <Accordion key={index}>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header id="detail-history">
                        <Row style={{ width: "100%" }}>
                          <Col className="title">
                            <h6>Harusnya Nama User</h6>
                            <h6 className="fw-bold">{el.Status_Payment}</h6>
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
                                  <td>Harusnya Nama WO</td>
                                </tr>
                                <tr>
                                  <td>User</td>
                                  <td>Harusnya Nama User</td>
                                </tr>
                                <tr>
                                  <td>Package</td>
                                  <td>Harusnya Nama Package</td>
                                </tr>
                                <tr>
                                  <td>Date Reservation</td>
                                  <td>Harusnya Tanggal Reservasi</td>
                                </tr>
                                <tr>
                                  <td>Total pax</td>
                                  <td>{el.Total_Pax}</td>
                                </tr>
                                <tr>
                                  <td>Total Price</td>
                                  <td>{el.Price}</td>
                                </tr>
                                <tr>
                                  <td>Price</td>
                                  <td>{el.Total_Price}</td>
                                </tr>
                              </tbody>
                            </Table>
                          </Col>
                          <Col md={4} className="col-status">
                            {/* <h7>
                              <b>Status Order&emsp;&emsp;&ensp;: {el.Status_Order}</b>
                            </h7>
                            <br /> */}
                            <h7>
                              <b>Status Payment&ensp; : {el.Status_Payment}</b>
                            </h7>
                            <br />
                            <div className="image-invoice" id="image-invoice">
                              <img src={el.UrlPhoto} alt="preview-invoice" />
                            </div>
                          </Col>

                          {/* /* ------------------------------- COL BUTTON ------------------------------- */}
                          <Col md={2} sm={12} className="col-button">
                            <Button id="detail-package-history" style={{ color: "#fff", width: "90%" }} md={12} sm={6} className="m-2 btn-submit" variant="warning" onClick={() => goToDetail(el.Package_ID)}>
                              Accept
                            </Button>
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
      </div>
    );
  } else {
    return <Home />;
  }
};

export default ListPayment;
