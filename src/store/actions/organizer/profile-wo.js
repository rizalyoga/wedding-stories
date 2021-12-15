import axios from "axios";
import swal from "sweetalert";
import allStore from "../index.js";
import swall from "sweetalert";

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
        } else {
          swall("Check your Internet Connection");
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
