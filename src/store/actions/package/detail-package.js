import axios from "axios";
import allStore from "../index.js";
import swal from "sweetalert";
import packages from "../../../data/list-product/packages.json";

export const detailPackage = (id) => {
  const online = window.navigator.onLine;
  //   const token = localStorage.getItem("token");
  //   const config = {
  //     headers: { Authorization: `Bearer ${token}` },
  //   };
  return (dispatch) => {
    dispatch(allStore.setLoading(true));
    axios
      // .get(`https://weddingstories.space/package/${id}`)
      .get(`https://jsonplaceholder.typicode.com/users/1`)
      .then((data) => {
        const dataDetailPackage = packages.data.filter(
          (el) => el.package_id === Number(id)
        );
        dispatch(setDetaiilPackage(dataDetailPackage));
      })
      .catch((err) => {
        if (online) {
          console.log(err);
          swal("data not found", { icon: "warning" });
          // swal(err.response.data.message, { icon: "warning" });
        } else {
          // console.log(err.response.data.message);
          swal("Check your Internet Connection", { icon: "warning" });
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
