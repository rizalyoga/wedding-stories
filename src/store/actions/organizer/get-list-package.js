import axios from "axios";
import allStore from "../index.js";
import swal from "sweetalert";

export const getMyPackage = () => {
  const online = window.navigator.onLine;
  const token = localStorage.getItem("token");
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  return (dispatch) => {
    dispatch(allStore.setLoading(true));
    axios
      .get(`https://weddingstories.space/package/my`, config)
      .then((data) => {
        // console.log(data.data.data);
        dispatch(setMyPackage(data.data.data));
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

export const setMyPackage = (payload) => {
  return {
    type: "SET_MY_PACKAGE",
    payload,
  };
};
