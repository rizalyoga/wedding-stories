import "./list-payment.css";
import NavUser from "../../components/navbar-user/navbar-user.jsx";
import { Container, Accordion, Row, Col, Button, Spinner, Alert, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import allStore from "../../../store/actions/index.js";
import swal from "sweetalert";
import Home from "../../home/before-login/index.jsx";

const ListPayment = () => {
  const dispatch = useDispatch();

  const listPayment = useSelector(({ listPayment }) => listPayment);
  // const loading = useSelector(({ loading }) => loading);

  useEffect(() => {
    dispatch(allStore.getAllPayment());
  }, [dispatch, listPayment]);

  // useEffect(() => {
  //   console.log(listPayment);
  //   // listPayment();
  // }, [listPayment]);

  // if (loading) {
  //   return (
  //     <>
  //       <NavUser />
  //       <Spinner className="spinner" animation="border" />
  //     </>
  //   );
  // }

  const handleChange = (id) => {
    // event.preventDefault();
    swal({
      text: "Are you sure to accept ?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willAccept) => {
      if (willAccept) {
        dispatch(allStore.acceptPayment({ reservationid: id }));
        // console.log(id);
      }
    });
  };

  const formatRupiah = (money) => {
    return new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 }).format(money);
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
                            {el.Status_Payment === "unpaid" ? (
                              <h6 className="fw-bold" style={{ color: "red" }}>
                                {el.Status_Payment}
                              </h6>
                            ) : (
                              <h6 className="fw-bold" style={{ color: "green" }}>
                                {el.Status_Payment}
                              </h6>
                            )}
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
                                  <td>User</td>
                                  <td>{el.Name}</td>
                                </tr>
                                <tr>
                                  <td>User Email</td>
                                  <td>{el.Email}</td>
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
                                  <td>Price</td>
                                  <td>{formatRupiah(el.Price) + ",00"}</td>
                                </tr>
                                <tr>
                                  <td>Total Price</td>
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
                            <Button id="detail-package-history" style={{ color: "#fff", width: "90%" }} md={12} sm={6} className="m-2 btn-submit" variant="success" onClick={(id) => handleChange(el.Reservation_ID)}>
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
