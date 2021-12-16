import {
  Container,
  Accordion,
  Row,
  Col,
  Button,
  Spinner,
} from "react-bootstrap";
import NavLoginWo from "../../components/navbar-wo/navbar-wo-login";
import "./listReservation.css";

const ListReservation = () => {
  return (
    <>
      <NavLoginWo></NavLoginWo>
      <div className="list-reserve">
        <Container className="mt-5 mb-5">
          <Row>
            <h2 className="title-page">Your Reservation List</h2>
            <hr />
          </Row>
          {Array.from({ length: 4 }).map((_, idx) => (
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <Row>
                    <Col>Client Name - Package Name - Status Order</Col>
                    {/* <Col md={6} style={{ color: "darkyellow" }}>
                      waiting
                    </Col> */}
                  </Row>
                </Accordion.Header>
                <Accordion.Body>
                  <Row>
                    <Col md={5} sm={12}>
                      <h7>
                        <b>Package :</b> Garden Party
                      </h7>
                      <br />
                      <h7>
                        <b>Date :</b> 02/02/2022
                      </h7>
                      <br />
                      <h7>
                        <b>Total Pax :</b> 1000
                      </h7>
                      <br />
                      <h7>
                        <b>Additional :</b> none
                      </h7>
                      <br />
                    </Col>
                    <Col md={5}>
                      <h7>
                        <b>Status Order :</b> waiting
                      </h7>
                      <br />
                      <h7>
                        <b>Status Payment :</b> not paided
                      </h7>
                      <br />
                    </Col>
                    <Col md={2} sm={12}>
                      <Button
                        id="accept"
                        md={12}
                        sm={6}
                        className="m-2 btn-submit"
                        variant="success"
                        // onClick={(e) => handleCreatPackage(e)}
                      >
                        Accept
                      </Button>
                      <Button
                        id="decline"
                        md={12}
                        sm={6}
                        className="m-2 btn-submit"
                        variant="danger"
                        // onClick={(e) => handleCreatPackage(e)}
                      >
                        Decline
                      </Button>
                    </Col>
                  </Row>
                </Accordion.Body>
              </Accordion.Item>
              <br />
            </Accordion>
          ))}
        </Container>
      </div>
    </>
  );
};

export default ListReservation;
