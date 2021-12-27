import axios from "axios";
import allStore from "../index.js";
import swal from "sweetalert";

export const acceptPayment = (payload) => {
  const online = window.navigator.onLine;

  const token = localStorage.getItem("token");
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  return (dispatch) => {
    dispatch(allStore.setLoading(true));
    console.log("INI DATA PAYLOAD ", payload);
    axios
      .put("https://weddingstories.space/payment/invoice", payload, config)
      .then((response) => {
        console.log("3, Masuk Then", response.data);
        swal(response.data.message, { icon: "success", buttons: false, timer: 1000 });
      })
      .catch((err) => {
        if (online) {
          // console.log("online");
          console.log("3, Masuk ERROR:", err.response.data);
          swal(err.response.data.message, { icon: "warning" });
        } else if (!online) {
          // console.log("offline");
          swal("Check your Internet Connection", { icon: "warning" });
        }

        // allStore.setError(err.response.data.message);
      })
      .finally((_) => dispatch(allStore.setLoading(false)));
  };
};

export const setAcceptPayment = (payload) => {
  return {
    type: "SET_ACCEPT_PAYMENT",
    payload,
  };
};
