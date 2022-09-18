import axios from "axios";
import allStore from "../index.js";
import swal from "sweetalert";

export const ProfileUser = () => {
  const online = window.ononLine;
  // const token = sessionStorage.getItem("token");
  // const config = {
  //   headers: { Authorization: `Bearer ${token}` },
  // };
  return (dispatch) => {
    dispatch(allStore.setLoading(true));
    // console.log("2.masuk Action");
    axios
      // .get("https://weddingstories.space/users/profile", config)
      .get("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => {
        // console.log("3, Masuk Then", response.data);
        console.log(response);
        dispatch(allStore.setProfileUser(response.data));
      })
      .catch((err) => {
        if (online) {
          console.log("3, Masuk ERROR:", err);
          // swal(err.response.data.message, { icon: "warning" });
        } else if (!online) {
          swal("Check your Internet Connection", { icon: "warning" });
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
