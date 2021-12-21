import "./history.css";
import NavUser from "../../components/navbar-user/navbar-user-login.jsx";
import { Container, Accordion, Row, Col, Button, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import allStore from "../../../store/actions/index.js";
import swal from "sweetalert";

const History = () => {
  const dispatch = useDispatch();

  const listOrder = useSelector(({ myHistory }) => myHistory);
  const loading = useSelector(({ loading }) => loading);

  useEffect(() => {
    dispatch(allStore.getHistory());
  }, [dispatch]);

  useEffect(() => {
    console.log(listOrder);
  }, [listOrder]);

  // const handlePayment = (event) => {
  //   event.preventDefault();
  //   if (listOrder.Status_Order === "accepted") {
  //     swal("nunggu Payment");
  //     console.log(listOrder.Status_Order);
  //   } else if (listOrder.Status_Order === "waiting") {
  //     swal("Pesanan anda masih belum diterima");
  //     console.log(listOrder.Status_Order);
  //   }
  // };

  if (loading) {
    return (
      <>
        <NavUser />
        <Spinner className="spinner" animation="border" />
      </>
    );
  }

  return (
    <>
      <NavUser />
      <div className="list-reservasi">
        <Container className="mt-5 mb-5">
          <Row>
            <h2 className="title-page">Your History Order</h2>
            <hr />
          </Row>
          {!listOrder ? (
            <></>
          ) : (
            listOrder.map((el, index) => (
              <Accordion key={index}>
                <Accordion.Item eventKey="0">
                  <Accordion.Header id="detail-history">
                    <Row style={{ width: "100%" }}>
                      <Col className="title">
                        <h6>{el.PackageName}</h6>
                        <h6 className="fw-bold">{el.Status_Order}</h6>
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
                          <b>Client Name&emsp;&emsp; : {el.WoName}</b>
                        </h7>
                        <br />
                        <h7>
                          <b>Package Name &ensp;: {el.PackageName}</b>
                        </h7>
                        <br />
                        <h7>
                          <b>Date&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;: {el.Date}</b>
                        </h7>
                        <br />
                        <h7>
                          <b>Total Pax&emsp;&emsp;&emsp;&emsp;: {el.Total_Pax}</b>
                        </h7>
                        <br />
                        <h7>
                          <b>Additional&emsp;&emsp;&emsp; : {!el.Additional ? "-" : el.Additional}</b>
                        </h7>
                        <br />
                      </Col>
                      <Col md={4}>
                        <h7>
                          <b>Status Order&emsp;&emsp;&ensp;: {el.Status_Order}</b>
                        </h7>
                        <br />
                        <h7>
                          <b>Status Payment&ensp; : {el.Status_Payment}</b>
                        </h7>
                        <br />
                      </Col>
                      <Col md={2} sm={12}>
                        {el.Status_Order === "declined" ? (
                          <></>
                        ) : (
                          <Button id="payment" md={12} sm={6} className="m-2 btn-submit" variant="secondary" onClick={() => (el.Status_Order === "waiting" ? swal("tunggu Pihak WO ya") : swal("sabar fitur belum jadi"))}>
                            Payment
                          </Button>
                        )}
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
