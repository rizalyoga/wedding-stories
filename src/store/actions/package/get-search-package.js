import axios from "axios";
import allStore from "../index.js";
// import swal from "sweetalert";

import packages from "../../../data/list-product/packages.json";

export const getSearchPackage = (term) => {
  const online = window.navigator.onLine;
  return (dispatch) => {
    dispatch(allStore.setLoading(true));
    axios
      .get(`https://jsonplaceholder.typicode.com/users/1`)
      .then((data) => {
        const dataSearch = [];
        packages.data.forEach((el) => {
          if (el.PackageName.toLowerCase().includes(term)) {
            dataSearch.push(el);
          }
          dispatch(setSearchPackage(dataSearch));
        });
      })
      .catch((err) => {
        if (online) {
          console.log(err);
          // swal(err.response.data.message);
        } else {
          // swal("Check your Internet Connection", { icon: "warning" });
        }
      })
      .finally((_) => dispatch(allStore.setLoading(false)));
  };
};

export const setSearchPackage = (payload) => {
  return {
    type: "SET_SEARCH_PACKAGE",
    payload,
  };
};
