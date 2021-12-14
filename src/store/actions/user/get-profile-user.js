import axios from "axios";
import allStore from "../index.js";
import swal from "sweetalert";

export const ProfileUser = (payload) => {
  const online = window.navigator.onLine;
  return (dispatch) => {
    dispatch(allStore.setLoading(true));
    console.log("2.masuk Action");
    console.log(payload);
    axios
      .post("https://weddingstories.space/users/profile", payload)
      .then((response) => {
        console.log("3, Masuk Then", response.data);
        dispatch(allStore.setProfileUser(response.data));
      })
      .catch((err) => {
        if (online) {
          console.log("3, Masuk ERROR:", err.response.data.message);
          swal(err.response.data.message);
        } else if (!online) {
          swal("Your Internet Offline");
        }
        // allStore.setError(err.response.data.message);
      })
      .finally((_) => dispatch(allStore.setLoading(false)));
  };
};

export const setProfileUser = (payload) => {
  return {
    type: "SET_PROFILE_USER",
    payload,
  };
};
