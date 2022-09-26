import axios from "axios";
import allStore from "../index.js";
import swal from "sweetalert";

export const UserLogin = (payload) => {
  sessionStorage.clear();
  const online = window.navigator.onLine;

  return (dispatch) => {
    dispatch(allStore.setLoading(true));

    axios
      // .post("https://weddingstories.space/login/users", payload)
      .get("https://jsonplaceholder.typicode.com/users/1/")
      .then((response) => {
        if (
          response.data.data !== null &&
          payload.email === "admin@wedding.com"
        ) {
          sessionStorage.setItem("token", Date.now());

          sessionStorage.setItem("status", "admin");
          sessionStorage.setItem("nama", "admin");
          sessionStorage.setItem("email", payload.email);
          swal("Login Success", { icon: "success", buttons: false });
          dispatch(allStore.setRoute("/"));
          setTimeout(() => {
            window.location.href = "/";
          }, 750);
        } else {
          sessionStorage.setItem("token", Date.now());
          sessionStorage.setItem("id", response.data.id);
          sessionStorage.setItem("status", "user");
          sessionStorage.setItem("nama", response.data.name);
          sessionStorage.setItem("email", response.data.email);
          swal("Login Success", { icon: "success", buttons: false });
          dispatch(allStore.setRoute("/"));
          setTimeout(() => {
            window.location.href = "/";
          }, 750);
        }
      })
      .catch((err) => {
        if (online) {
          // swal(err.response.data.message, { icon: "warning" });
          swal(err, { icon: "warning" });
        } else if (!online) {
          swal("Check your Internet Connection", { icon: "warning" });
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
