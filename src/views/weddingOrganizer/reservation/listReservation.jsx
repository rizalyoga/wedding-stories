import {
  Container,
  Accordion,
  Row,
  Col,
  Button,
  Spinner,
  Alert,
} from "react-bootstrap";
import NavLoginWo from "../../components/navbar-wo/navbar-wo-login";
import { useState, useEffect } from "react";
import axios from "axios";
import "./listReservation.css";

const ListReservation = () => {
  const [loading, setLoading] = useState(false);
  const [order, setOrder] = useState([]);

  useEffect(() => {
    setLoading(true);
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    console.log(order.length);
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
        <Spinner className="spinner" animation="border" />
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
  return (
    <>
      <NavLoginWo></NavLoginWo>
      <div className="list-reserve">
        <Container className="mt-5 mb-5">
          <Row>
            <h2 className="title-page">Your Order</h2>
            <hr />
          </Row>
          {checkOrder()}
          {order.map((el, idx) => (
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
