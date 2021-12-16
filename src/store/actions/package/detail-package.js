import axios from "axios";
import allStore from "../index.js";
import swal from "sweetalert";

export const detailPackage = (id) => {
  const online = window.navigator.onLine;
  //   const token = localStorage.getItem("token");
  //   const config = {
  //     headers: { Authorization: `Bearer ${token}` },
  //   };
  return (dispatch) => {
    dispatch(allStore.setLoading(true));
    axios
      .get(`https://weddingstories.space/package/${id}`)
      .then((data) => {
        // console.log(data.data.data);
        dispatch(setDetaiilPackage(data.data.data));
      })
      .catch((err) => {
        if (online) {
          console.log(err);
        } else {
          swal("Check your Internet Connection");
        }
      })
      .finally((_) => dispatch(allStore.setLoading(false)));
  };
};

export const setDetaiilPackage = (payload) => {
  return {
    type: "SET_DETAIL_PACKAGE",
    payload,
  };
};
