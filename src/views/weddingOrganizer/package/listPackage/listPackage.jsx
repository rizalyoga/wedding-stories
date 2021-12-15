import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Tooltip,
  OverlayTrigger,
} from "react-bootstrap";
import NavLoginWo from "../../../components/navbar-wo/navbar-wo-login";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import AlertDelete from "./alertModal";
import "./listPackage.css";

const ListPackage = () => {
  const [pack, setPack] = useState([]);
  // alert delete
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };
  const [photo, setPhoto] = useState(
    "https://www.smpn2mirit.sch.id/wp-content/themes/sekolah/gambar/guru.jpg"
  );
  const navigate = useNavigate();

  const checkPack = () => {
    if (pack.length < 1) {
      return <h3>You Have No Package.</h3>;
    } else {
      return <h1>hoyy</h1>;
    }
  };

  return (
    <>
      <NavLoginWo />
      <div className="list-package">
        <Container className="mb-5 mt-5">
          <Row>
            <h2 className="title-page">Your Packages</h2>
            <hr />
          </Row>
          <Button
            variant="primary"
            className="mb-3 mt-3 btn-submit"
            onClick={() => navigate("/vendor/packages/add")}
          >
            <i class="bi bi-plus-square"> </i>
            New Package
          </Button>
          {checkPack}
          <Row xs={1} md={2} className="g-4">
            {Array.from({ length: 4 }).map((_, idx) => (
              <Col>
                <Card className="card-package">
                  <Card.Img
                    variant="top"
                    src={photo}
                    className="photo-package"
                    width="300px"
                    height="200px"
                  />
                  <Card.Body>
                    <Card.Title>
                      {" "}
                      <h5>
                        <b>Package Name</b>{" "}
                      </h5>
                      <h6>
                        <b>Price :</b> Rp 100000000
                      </h6>
                      <hr />
                      <h6>
                        <b>Pax :</b> 100
                      </h6>
                      <hr />
                      <h6>
                        <b>Description :</b> Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Sint dicta hic tempore
                        voluptatem eos fuga, ipsum unde, expedita suscipit
                        quibusdam laboriosam, assumenda eum tempora neque
                        laudantium qui quam commodi consequuntur!
                      </h6>
                    </Card.Title>
                    <Card.Text>
                      <Row>
                        <div className="col-4">
                          <OverlayTrigger
                            key="bottom"
                            placement="bottom"
                            overlay={
                              <Tooltip id="tooltip-bottom">details</Tooltip>
                            }
                          >
                            <i className="bi bi-journal-text m-3 cursor"></i>
                          </OverlayTrigger>
                        </div>
                        <div className="col-4">
                          <OverlayTrigger
                            key="bottom"
                            placement="bottom"
                            overlay={
                              <Tooltip id="tooltip-bottom">edit</Tooltip>
                            }
                          >
                            <i class="bi bi-pencil-square m-3 cursor"></i>
                          </OverlayTrigger>
                        </div>
                        <div className="col-4">
                          <OverlayTrigger
                            key="bottom"
                            placement="bottom"
                            overlay={
                              <Tooltip id="tooltip-bottom">delete</Tooltip>
                            }
                          >
                            <i
                              class="bi bi-trash m-3 cursor"
                              onClick={handleShow}
                            ></i>
                          </OverlayTrigger>
                          <AlertDelete
                            handleClose={() => handleClose()}
                            show={show}
                          />
                        </div>
                      </Row>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default ListPackage;
