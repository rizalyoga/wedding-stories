import axios from "axios";
import allStore from "../index.js";
import swal from "sweetalert";

export const fetchProfileWo = () => {
  const online = window.navigator.onLine;
  const token = localStorage.getItem("token");
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  return (dispatch) => {
    dispatch(allStore.setLoading(true));
    axios
      .get(`https://weddingstories.space/organizer/profile`, config)
      .then((data) => {
        // console.log(data.data.data);
        dispatch(setProfileWo(data.data.data));
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

export const setProfileWo = (payload) => {
  return {
    type: "SET_PROFILE_WO",
    payload,
  };
};
