import axios from "axios";
import allStore from "../index.js";
import swal from "sweetalert";
// import { token } from "../Login/Set-Login.js";

// setting beareer

export const postEditUser = (payload) => {
  const token = localStorage.getItem("token");
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  // const email = "joni@mail.com";

  return (dispatch) => {
    dispatch(allStore.setLoading(true));
    // dispatch(allStore.setError(null));
    console.log("2.masuk Action Edit INI");
    console.log(payload);
    axios
      .put("https://weddingstories.space/users/profile", payload, config)
      .then((response) => {
        console.log("3, Masuk Then", response.data);
        swal(response.data.message, { icon: "success" });
        // if (localStorage.nama) {
        //   localStorage.removeItem("nama");
        //   localStorage.setItem("nama", "dian");
        // }
        // allStore.setProfileUser(response.data.data);

        return axios
          .get("https://weddingstories.space/users/profile", config)
          .then((response) => {
            console.log(response.data, "INI RESPONSE PROFILE");
            if (localStorage.nama) {
              localStorage.removeItem("nama");
              localStorage.removeItem("email");
              localStorage.setItem("nama", response.data.data.Name);
              localStorage.setItem("email", response.data.data.Email);
            }
          })
          .catch((err) => {
            console.log("ERROR GET PROFILE", err.response.data);
          });
        dispatch(allStore.setEditUser(response.data.data));

        // window.location.reload();
      })
      .catch((err) => {
        console.log("3, Masuk ERROR:", err.response.data.message);
        swal(err.response.data.message);
        // allStore.setError(err.response.data.message);
        // dispatch(allStore.setError(err.response.data.message));
      })
      .finally((_) => dispatch(allStore.setLoading(false)), dispatch(allStore.setError({})));
  };
};

export const setEditUser = (payload) => {
  return {
    type: "SET_EDIT_USER",
    payload,
  };
};
