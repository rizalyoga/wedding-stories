import "./detail-package.css";
// import foto from "../../../assets/download.jpeg";
import NavUser from "../../components/navbar-user/navbar-user";
import { Button, Spinner } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import allStore from "../../../store/actions/index.js";

const DetailPackage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const detailPackage = useSelector(({ getDetailPackage }) => getDetailPackage);
  const loading = useSelector(({ loading }) => loading);
  const { id } = useParams();

  useEffect(() => {
    dispatch(allStore.detailPackage(id));
  }, [dispatch, id]);

  // useEffect(() => {
  //   console.log(detailPackage);
  // }, [detailPackage]);

  const formatRupiah = (money) => {
    return new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 }).format(money);
  };

  if (loading) {
    return (
      <div className="loading d-flex justify-content-center align-items-center flex-column">
        <Spinner animation="border" />
      </div>
    );
  }

  const goToDetailWo = (id) => {
    navigate(`/user/detail/organizer/${id}`);
  };

  if (!detailPackage) {
    return <></>;
  }

  return (
    <div>
      <NavUser />
      <div className="container">
        <div className="desc-wo">
          <h3 className="fw-bold" style={{ cursor: "pointer" }} id="wo-name" onClick={() => goToDetailWo(detailPackage.Organizer_ID)}>
            {detailPackage.Wo_Name}
          </h3>
          <div className="content-address d-flex mb-1">
            <h6 className="me-1">{detailPackage.City}, </h6>
            <h6>{detailPackage.Address}</h6>
          </div>
        </div>
        <hr />
        <div className="row-foto">
          <div className="image-package">
            <img src={detailPackage.UrlPhoto} alt="foto-paket" />
          </div>
        </div>
        <div className="name-package">
          <h4 className="fw-bold">{detailPackage.PackageName}</h4>
          <h5 className="my-3">Detail Package</h5>
        </div>
        <div className="row-content-detail">
          <div className="col-detail">
            <p>{detailPackage.PackageDesc}</p>
          </div>
          <div className="col-card-price">
            <div className="content-pesan">
              <div className="harga">
                <p>Harga</p>
                <h6 className="fw-bold">{formatRupiah(detailPackage.Price) + ",00"} </h6>
              </div>
              <hr />
              <div className="form-pax">
                <div className="min-pax">
                  <p className="text-center desc-pax">Harga</p>
                  <input className="text-center" disabled="disable" value={detailPackage.Pax} type="text" />
                </div>
                <div className="custom-pax">
                  <p className="text-center desc-pax">Custom pax</p>
                  <input className="text-center" type="text" required />
                </div>
              </div>
              <hr />
              <div className="btn-pesan">
                <Button className="w-100" id="order-button">
                  Order
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPackage;
