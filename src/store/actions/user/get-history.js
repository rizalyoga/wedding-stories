import axios from "axios";
import allStore from "../index.js";
import swal from "sweetalert";

// Data
import listHistoryOrder from "../../../data/list-my-order/list_my_order.json";

export const getHistory = () => {
  const online = window.navigator.onLine;
  // const token = localStorage.getItem("token");
  // const config = {
  //   headers: { Authorization: `Bearer ${token}` },
  // };

  return (dispatch) => {
    dispatch(allStore.setLoading(true));
    axios
      // .get(`https://weddingstories.space/order/users/my`, config)
      .get("https://jsonplaceholder.typicode.com/users/2")
      .then((data) => {
        dispatch(setHistory(listHistoryOrder.data));
      })
      .catch((err) => {
        if (online) {
          console.log(err);
          swal(err.response.data.message, { icon: "warning" });
        } else {
          swal("Check your Internet Connection", { icon: "warning" });
        }
      })
      .finally((_) => dispatch(allStore.setLoading(false)));
  };
};

export const setHistory = (payload) => {
  return {
    type: "SET_MY_HISTORY",
    payload,
  };
};
