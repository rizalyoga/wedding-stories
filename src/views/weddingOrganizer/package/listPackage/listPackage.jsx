import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Tooltip,
  OverlayTrigger,
  Spinner,
} from "react-bootstrap";
import NavLoginWo from "../../../components/navbar-wo/navbar-wo-login";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import AlertDelete from "./alertModal";
import "./listPackage.css";
import axios from "axios";

const ListPackage = () => {
  const [pack, setPack] = useState([]);
  const [loading, setLoading] = useState(false);
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
    if (pack.length < 0) {
      <h3>You Have No Package.</h3>;
    } else {
      <h1>hoyy</h1>;
    }
  };

  const handleEdit = (id) => {
    navigate(`/vendor/packages/edit/${id}`);
  };

  useEffect(() => {
    setLoading(true);
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    axios
      .get("https://weddingstories.space/package/my", config)
      .then(({ data }) => {
        console.log(data.data);
        setPack(data.data);
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
            id="nav-form-add-package"
            variant="primary"
            className="mb-3 mt-3 btn-submit"
            onClick={() => navigate("/vendor/packages/add")}
          >
            <i class="bi bi-plus-square"> </i>
            New Package
          </Button>
          {checkPack}
          <Row xs={1} md={2} className="g-4">
            {pack.map((el, idx) => (
              <Col>
                <Card className="card-package">
                  <Card.Img
                    variant="top"
                    src={el.UrlPhoto}
                    className="photo-package"
                    width="300px"
                    height="200px"
                  />
                  <Card.Body>
                    <Card.Title>
                      {" "}
                      <h5>
                        <b>{el.PackageName}</b>{" "}
                      </h5>
                      <hr />
                      <h6>
                        <b>Price :</b> Rp {el.Price}
                      </h6>
                      <hr />
                      <h6>
                        <b>Pax :</b> {el.Pax}
                      </h6>
                      <hr />
                      <h6>
                        <b>Description :</b> {el.PackageDesc}
                      </h6>
                      <hr />
                    </Card.Title>
                    <Card.Text>
                      <Row>
                        <div className="col-8">
                          {/* <OverlayTrigger
                            key="bottom"
                            placement="bottom"
                            overlay={
                              <Tooltip id="tooltip-bottom">details</Tooltip>
                            }
                          >
                            <i className="bi bi-journal-text m-3 cursor"></i>
                          </OverlayTrigger> */}
                        </div>
                        <div className="col-2">
                          <OverlayTrigger
                            key="bottom"
                            placement="bottom"
                            overlay={
                              <Tooltip id="tooltip-bottom">edit</Tooltip>
                            }
                          >
                            <i
                              class="bi bi-pencil-square m-3 cursor"
                              onClick={() => handleEdit(el.ID)}
                            ></i>
                          </OverlayTrigger>
                        </div>
                        <div className="col-2">
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
                            packName={el.PackageName}
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
