import axios from "axios";
import allStore from "../index.js";
import swal from "sweetalert";

export const postOrder = (payload) => {
  const online = window.navigator.onLine;

  const token = localStorage.getItem("token");
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  return (dispatch) => {
    dispatch(allStore.setLoading(true));
    console.log("2.masuk Action");
    console.log(payload);
    axios
      .post("https://weddingstories.space/reservation", payload, config)
      .then((response) => {
        console.log("3, Masuk Then", response.data);
        swal(response.data.message, { icon: "success", buttons: false, timer: 1000 });
        setTimeout(() => {
          window.location.href = "/user/history";
        }, 1500);
      })
      .catch((err) => {
        if (online) {
          // console.log("online");
          console.log("3, Masuk ERROR:", err.response.data);
          swal(err.response.data.message);
        } else if (!online) {
          // console.log("offline");
          swal("Check your Internet Connection", { icon: "warning" });
        }

        // allStore.setError(err.response.data.message);
      })
      .finally((_) => dispatch(allStore.setLoading(false)));
  };
};

export const setPostOrder = (payload) => {
  return {
    type: "SET_POST_ORDER",
    payload,
  };
};
