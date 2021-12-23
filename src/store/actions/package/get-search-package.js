import axios from "axios";
import allStore from "../index.js";
// import swal from "sweetalert";

export const getSearchPackage = (term) => {
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
        const dataSearch = [];
        data.data.data.map((el) => {
          if (el.PackageName.toLowerCase().includes(term)) {
            // console.log("ada bos");
            dataSearch.push(el);
            // setTimeout(() => {
            //   window.location.href = "/search/package";
            // }, 550);
          }
          dispatch(setSearchPackage(dataSearch));
        });
        // if(data.data.data.PackageName.includes)
      })
      .catch((err) => {
        if (online) {
          console.log(err);
          // swal(err.response.data.message);
          // swal("");
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
