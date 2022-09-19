import axios from "axios";
import allStore from "../index.js";
import swal from "sweetalert";
import packages from "../../../data/list-product/packages.json";

export const getAllPackage = () => {
  const online = window.navigator.onLine;
  //   const token = localStorage.getItem("token");
  //   const config = {
  //     headers: { Authorization: `Bearer ${token}` },
  //   };

  return (dispatch) => {
    dispatch(allStore.setLoading(true));
    axios
      // .get(`https://weddingstories.space/package`)
      .get(`https://jsonplaceholder.typicode.com/users/1`)
      .then((data) => {
        dispatch(setAllPackage(packages.data));
      })
      .catch((err) => {
        if (online) {
          console.log(err);
          // swal(err.response.data.message);
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
