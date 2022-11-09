import React from "react";
import "./card.css";
import { useNavigate } from "react-router-dom";

const Card = ({ packageData }) => {
  const navigate = useNavigate();

  const formatRupiah = (money) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(money);
  };

  const goToDetail = (id) => {
    navigate(`/detail/package/${id}`);
  };

  return (
    <>
      {packageData &&
        packageData.map((el) => (
          <div
            className="card-wo my-2 "
            id="card-package-landing-page"
            onClick={() => goToDetail(el.package_id)}
            key={el.package_id}
          >
            <div className="images">
              <img
                style={{ borderRadius: "10px" }}
                src={el.UrlPhoto}
                alt="product"
              />
            </div>
            <div className="name-wo fw-bold mt-1" id="name-wo">
              {el.PackageName}
            </div>
            <div className="desc-packages d-flex justify-content-between">
              <div className="price">{formatRupiah(el.Price) + ",00"}</div>
            </div>
          </div>
        ))}
    </>
  );
};

export default Card;
