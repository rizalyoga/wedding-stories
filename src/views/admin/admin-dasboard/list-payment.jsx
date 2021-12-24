import "./list-payment.css";
import NavUser from "../../components/navbar-user/navbar-user.jsx";
import { Container, Accordion, Row, Col, Button, Spinner, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
// import allStore from "../../../store/actions/index.js";
// import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import Home from "../../home/before-login/index.jsx";

const ListPayment = () => {
  // const dispatch = useDispatch();

  const navigate = useNavigate();

  // const listOrder = useSelector(({ myHistory }) => myHistory);
  const listOrder = null;
  const loading = useSelector(({ loading }) => loading);

  // useEffect(() => {
  //   dispatch(allStore.getHistory());
  // }, [dispatch]);

  // useEffect(() => {
  //   console.log(listOrder);
  // }, [listOrder]);

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
            {!listOrder ? (
              <div style={{ height: "100vh" }}>
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
                            <p>Client Name&emsp;&emsp; : </p>
                            <p>Package Name &ensp;: </p>
                            <p>Date&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;: </p>
                            <p>Total Pax&emsp;&emsp;&emsp;&emsp;: </p>
                            <p>
                              Additional&emsp;&emsp;&emsp; : <br />
                            </p>
                          </Col>
                          <Col md={4}>
                            <h7>
                              <b>Status Order&emsp;&emsp;&ensp;: </b>
                            </h7>
                            <br />
                            <h7>
                              <b>Status Payment&ensp; : </b>
                            </h7>
                            <br />
                          </Col>
                          <Col md={2} sm={12}>
                            <Button id="detail-package-order" style={{ color: "#fff" }} md={12} sm={6} className="m-2 btn-submit" variant="warning" onClick={() => goToDetail(el.Package_ID)}>
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
