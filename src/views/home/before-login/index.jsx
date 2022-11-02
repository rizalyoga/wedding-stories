import "./home.css";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import allStore from "../../../store/actions/index.js";

import NavUser from "../../components/navbar-user/navbar-user.jsx";
import Banner from "../../components/banner/banner.jsx";
import Reason from "../../components/reason/reason.jsx";
import Card from "../../components/card/card";
import { Spinner } from "react-bootstrap";

const Home = () => {
  const dispatch = useDispatch();

  const allPackage = useSelector(({ getAllPackage }) => getAllPackage);
  const loading = useSelector(({ loading }) => loading);

  useEffect(() => {
    dispatch(allStore.getAllPackage());
  }, [dispatch]);

  if (loading) {
    return (
      <>
        <NavUser />
        <Spinner className="spinner" animation="border" />
      </>
    );
  }

  return (
    <>
      <NavUser />

      <Banner />
      <Reason />
      <div className="list-wo container-list-wo">
        <div className="container">
          <h2 className="fw-bold">Wedding Packages in Indonesia</h2>
          <div className="row-card my-5">
            {!allPackage ? <></> : <Card packageData={allPackage} />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
