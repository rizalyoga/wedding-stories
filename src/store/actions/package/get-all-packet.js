import axios from "axios";
import allStore from "../index.js";
import swal from "sweetalert";

export const getAllPackage = () => {
  const online = window.navigator.onLine;
  //   const token = localStorage.getItem("token");
  //   const config = {
  //     headers: { Authorization: `Bearer ${token}` },
  //   };
  return (dispatch) => {
    dispatch(allStore.setLoading(true));
    axios
      .get(`https://weddingstories.space/package`)
      .then((data) => {
        // console.log(data.data.data);
        dispatch(setAllPackage(data.data.data));
      })
      .catch((err) => {
        if (online) {
          console.log(err);
          // swal(err.response.data.message);
          console.log(err);
        } else {
          swal("Check your Internet Connection", { icon: "warning" });
        }
      })
      .finally((_) => dispatch(allStore.setLoading(false)));
  };
};

export const setAllPackage = (payload) => {
  return {
    type: "SET_ALL_PACKAGE",
    payload,
  };
};
