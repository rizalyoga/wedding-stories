import "./detail-package.css";
import React from "react";
// import foto from "../../../assets/download.jpeg";
import NavUser from "../../components/navbar-user/navbar-user";
import { Button, Spinner } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import allStore from "../../../store/actions/index.js";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import swal from "sweetalert";
import moment from "moment";
// import ModalLogin from "../../components/modal-login/modal-login";

const DetailPackage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const detailPackage = useSelector(({ getDetailPackage }) => getDetailPackage);
  const loading = useSelector(({ loading }) => loading);
  const { id } = useParams();

  // const [modalLoginShow] = useState(true);

  /* --------------------------- GET DETAIL PACKAGE --------------------------- */

  useEffect(() => {
    dispatch(allStore.detailPackage(id));
  }, [dispatch, id]);

  const [date, setDate] = useState(null);
  const [additional, setAdditional] = useState("");
  const [totalPax, setTotalPax] = useState(detailPackage.Pax);
  // useEffect(() => {
  //   console.log(detailPackage);
  // }, [detailPackage]);

  /* ----------------------------- RUPIAH CONVERT ----------------------------- */

  const formatRupiah = (money) => {
    return new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 }).format(money);
  };

  /* --------------------------------- LOADING -------------------------------- */

  if (loading) {
    return (
      <div className="loading d-flex justify-content-center align-items-center flex-column">
        <Spinner animation="border" />
      </div>
    );
  }

  /* ----------------------- NAVIGATE TO DETAIL PACKAGE ----------------------- */

  const goToDetailWo = (id) => {
    navigate(`/user/detail/organizer/${id}`);
  };

  /* ------------------------------ HANDLE SUBMIT ----------------------------- */

  const handleSubmit = (event) => {
    event.preventDefault();
    const pax = parseInt(totalPax);
    //check total pax
    if (!localStorage.token) {
      // <ModalLogin show={modalLoginShow} />;
      swal("Please Login First");
    } else if (localStorage.status == "organizer") {
      swal("Please Sign In as User");
    } else if (pax < detailPackage.Pax) {
      swal("Your Custom-Pax under minimum");
    } else if (!date) {
      swal("Please insert date !");
    } else if (!totalPax) {
      swal("Custom Pax Cannot be Blank");
    } else {
      let dateString = moment(date).format("YYYY-MM-DD");
      let idPackage = parseInt(id);
      // console.log(dateString); // Output: 2020-07-21
      // console.log(date);
      // console.log(additional);
      // console.log(pax);
      // console.log(id);
      dispatch(allStore.postOrder({ package_id: idPackage, date: dateString, additional: additional, Total_pax: pax }));

      setTotalPax(detailPackage.Pax);
      setDate(null);
      setAdditional("");
    }
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
                  <p className="text-center desc-pax">Min Pax</p>
                  <input className="text-center" disabled="disable" value={detailPackage.Pax} type="text" />
                </div>
                <div className="custom-pax">
                  <p className="text-center desc-pax">Custom pax</p>
                  <input
                    className="text-center custom-pax"
                    autoComplete="off"
                    id="custom-pax"
                    type="number"
                    placeholder={detailPackage.Pax}
                    value={totalPax}
                    min={detailPackage.Pax}
                    onChange={(event) => setTotalPax(event.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="content-order">
                <DatePicker
                  className="date-order mt-3 text-center"
                  autoComplete="off"
                  id="date-order"
                  selected={date}
                  onChange={(date) => setDate(date)}
                  dateFormat="yyyy-MM-dd"
                  minDate={new Date()}
                  placeholderText="Select a date"
                  required
                />
                <textarea className="additional mt-3" name="additional" id="additional" cols="30" rows="10" value={additional} onChange={(event) => setAdditional(event.target.value)}></textarea>
              </div>

              <hr />
              <div className="btn-pesan">
                <Button className="w-100" id="order-button" onClick={(event) => handleSubmit(event)}>
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
