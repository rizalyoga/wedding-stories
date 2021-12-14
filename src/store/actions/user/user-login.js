import axios from "axios";
import allStore from "../index.js";
import swal from "sweetalert";

export const UserLogin = (payload) => {
  localStorage.clear();
  const online = window.navigator.onLine;

  return (dispatch) => {
    dispatch(allStore.setLoading(true));
    console.log("2.masuk Action");
    console.log(payload);
    axios
      .post("https://weddingstories.space/login/users", payload)
      .then((response) => {
        console.log("3, Masuk Then", response.data);
        swal(response.data.message);

        if (response.data.data !== null) {
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("id", response.data.id);
          localStorage.setItem("status", response.data.role);
          localStorage.setItem("nama", response.data.name);
          dispatch(allStore.setRoute("/"));
          window.location.reload("/");
        }
      })
      .catch((err) => {
        if (online) {
          console.log("online");
          console.log("3, Masuk ERROR:", err.response.data.message);
          swal(err.response.data.message);
        } else if (!online) {
          console.log("offline");
          swal("Your Internet Offline");
        }

        // allStore.setError(err.response.data.message);
      })
      .finally((_) => dispatch(allStore.setLoading(false)));
  };
};

export const setUserLogin = (payload) => {
  return {
    type: "SET_USER_LOGIN",
    payload,
  };
};
