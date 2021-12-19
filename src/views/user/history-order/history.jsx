import "./history.css";
import NavUser from "../../components/navbar-user/navbar-user-login.jsx";
import { Container, Accordion, Row, Col, Button, Spinner } from "react-bootstrap";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
// import allStore from "../../../store/actions/index.js";

const History = () => {
  return (
    <>
      <NavUser />
      <div className="list-reservasi">
        <Container className="mt-5 mb-5">
          <Row>
            <h2 className="title-page">Your History Order</h2>
            <hr />
          </Row>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <Row>
                  <Col></Col>
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
                      <b>Client Name :</b>
                    </h7>
                    <br />
                    <h7>
                      <b>Package Name :</b>
                    </h7>
                    <br />
                    <h7>
                      <b>Date :</b>
                    </h7>
                    <br />
                    <h7>
                      <b>Total Pax :</b>
                    </h7>
                    <br />
                    <h7>
                      <b>Additional :</b>
                    </h7>
                    <br />
                  </Col>
                  <Col md={4}>
                    <h7>
                      <b>Status Order :</b>
                    </h7>
                    <br />
                    <h7>
                      <b>Status Payment :</b>
                    </h7>
                    <br />
                  </Col>
                  <Col md={2} sm={12}>
                    <Button
                      id="accept"
                      md={12}
                      sm={6}
                      className="m-2 btn-submit"
                      variant="secondary"
                      disabled="disable"
                      // onClick={(e) => handleCreatPackage(e)}
                    >
                      Payment
                    </Button>
                  </Col>
                </Row>
              </Accordion.Body>
            </Accordion.Item>
            <br />
          </Accordion>
        </Container>
      </div>
    </>
  );
};

export default History;
