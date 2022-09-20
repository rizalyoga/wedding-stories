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

  /* --------------------------- GET DETAIL PACKAGE --------------------------- */

  useEffect(() => {
    dispatch(allStore.detailPackage(id));
  }, [dispatch, id]);

  const [date, setDate] = useState(null);
  const [additional, setAdditional] = useState("");
  const [totalPax, setTotalPax] = useState(
    detailPackage ? detailPackage.Pax : null
  );

  /* ----------------------------- RUPIAH CONVERT ----------------------------- */

  const formatRupiah = (money) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(money);
  };

  /* --------------------------------- LOADING -------------------------------- */

  if (loading) {
    return (
      <>
        <NavUser />
        <Spinner className="spinner" animation="border" />
      </>
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
    if (!sessionStorage.token) {
      // <ModalLogin show={modalLoginShow} />;
      swal("Please Login First", { icon: "info" });
    } else if (sessionStorage.status === "organizer") {
      swal("Please Sign In as User", { icon: "info" });
    } else if (pax < detailPackage.Pax) {
      swal("Your Custom-Pax under minimum", { icon: "warning" });
    } else if (!date) {
      swal("Please insert date !", { icon: "warning" });
    } else if (!totalPax) {
      swal("Custom Pax Cannot be Blank", { icon: "warning" });
    } else {
      let dateString = moment(date).format("YYYY-MM-DD");
      let idPackage = parseInt(id);

      dispatch(
        allStore.postOrder({
          package_id: idPackage,
          date: dateString,
          additional: additional,
          Total_pax: pax,
        })
      );

      setTotalPax(detailPackage.Pax);
      setDate(null);
      setAdditional("");
    }
  };

  /* ---------------------------- // PAGE NOT FOUN ---------------------------- */

  if (!detailPackage) {
    return (
      <>
        <NavUser />
        <h1
          className="text-center"
          style={{ marginTop: "25%", height: "50vh", color: "#bdbdbd" }}
        >
          <i className="bi bi-emoji-frown"> </i>
          Package Not Found
        </h1>
      </>
    );
  } else {
    return (
      <div>
        <NavUser />
        <div className="container">
          <div className="desc-wo">
            <h3
              className="fw-bold"
              style={{ cursor: "pointer" }}
              id="wo-name"
              onClick={() => goToDetailWo(detailPackage[0]?.Organizer_ID)}
            >
              {detailPackage[0]?.Wo_Name}
            </h3>
            <div className="content-address d-flex mb-1">
              <h6 className="me-1">{detailPackage[0]?.City}, </h6>
              <h6>{detailPackage[0]?.Address}</h6>
            </div>
          </div>
          <hr />
          <div className="row-foto">
            <div className="image-package mt-4">
              <img src={detailPackage[0]?.UrlPhoto} alt="foto-paket" />
            </div>
          </div>
          <div className="name-package">
            <h4 className="fw-bold">{detailPackage[0]?.PackageName}</h4>
            <h5 className="my-3">Detail Package</h5>
          </div>
          <div className="row-content-detail">
            <div className="col-detail">
              <p>{detailPackage[0]?.PackageDesc}</p>
            </div>
            <div className="col-card-price">
              <div className="content-pesan">
                <div className="harga">
                  <p className="pb-1">Price</p>
                  <h6 className="fw-bold ">
                    {formatRupiah(detailPackage[0]?.Price) + ",00"}{" "}
                  </h6>
                </div>
                <hr />
                <div className="form-pax">
                  <div className="min-pax">
                    <p className="text-center desc-pax">Min Pax</p>
                    <input
                      className="text-center"
                      disabled="disable"
                      value={detailPackage[0]?.Pax}
                      type="text"
                    />
                  </div>
                  <div className="custom-pax">
                    <p className="text-center desc-pax">Custom pax</p>
                    <input
                      className="text-center custom-pax"
                      autoComplete="off"
                      id="custom-pax"
                      type="number"
                      placeholder={detailPackage[0]?.Pax}
                      value={totalPax}
                      min={detailPackage[0]?.Pax}
                      onChange={(event) => setTotalPax(event.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="content-order">
                  <div className="calender">
                    <p className="text-center desc-pax date-title">
                      Date Reservation
                    </p>
                    <div className="date-picker d-flex">
                      <DatePicker
                        className="date-order mt-3 text-center"
                        autoComplete="off"
                        id="date-order"
                        selected={date}
                        onChange={(date) => setDate(date)}
                        dateFormat="yyyy-MM-dd"
                        minDate={new Date()}
                        placeholderText="Select date Reservation"
                        required
                      />
                      <i className="bi bi-calendar2-week logo-calender"></i>
                    </div>
                  </div>
                  <p className="text-center desc-pax date-title">
                    Your Additional
                  </p>
                  <textarea
                    className="text-area additional mt-3"
                    name="additional"
                    id="additional"
                    cols="30"
                    rows="5"
                    value={additional}
                    onChange={(event) => setAdditional(event.target.value)}
                    placeholder="Type your additional note..."
                  ></textarea>
                </div>

                <hr />
                <div className="btn-pesan">
                  <Button
                    className="w-100"
                    id="order-button"
                    onClick={(event) => handleSubmit(event)}
                  >
                    Order
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default DetailPackage;
