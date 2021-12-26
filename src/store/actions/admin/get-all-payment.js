import axios from "axios";
import allStore from "../index.js";
import swal from "sweetalert";

export const getAllPayment = () => {
  const online = window.navigator.onLine;
  const token = localStorage.getItem("token");
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  return (dispatch) => {
    dispatch(allStore.setLoading(true));
    axios
      .get(`https://weddingstories.space/payment/invoice`, config)
      .then((data) => {
        // console.log(data.data.data);
        dispatch(setAllPayment(data.data.data));
      })
      .catch((err) => {
        if (online) {
          console.log(err);
          swal(err.response.data.message);
          // swal("");
        } else {
          swal("Check your Internet Connection", { icon: "warning" });
        }
      })
      .finally((_) => dispatch(allStore.setLoading(false)));
  };
};

export const setAllPayment = (payload) => {
  return {
    type: "SET_ALL_PAYMENT",
    payload,
  };
};
