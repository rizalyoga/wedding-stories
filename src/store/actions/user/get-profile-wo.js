import axios from "axios";
import allStore from "../index.js";
import swal from "sweetalert";
import profile_wo from "../../../data/list-wo/wedding_organizer.json";

export const getDetailWo = (id) => {
  const online = window.navigator.onLine;

  // const token = localStorage.getItem("token");
  // const config = {
  //   headers: { Authorization: `Bearer ${token}` },
  // };

  return (dispatch) => {
    dispatch(allStore.setLoading(true));
    axios
      // .get(`https://weddingstories.space/organizer/profile/${id}`, config)
      .get(`https://jsonplaceholder.typicode.com/users/1`)
      .then((data) => {
        const detail_wo = profile_wo.data.filter(
          (el) => el.Organizer_ID === Number(id)
        );

        dispatch(setDetailWo(detail_wo));
      })
      .catch((err) => {
        if (online) {
          console.log(err);
          // swal(err.response.data.message, { icon: "warning" });
        } else {
          swal("Check your Internet Connection", { icon: "warning" });
        }
      })
      .finally((_) => dispatch(allStore.setLoading(false)));
  };
};

export const setDetailWo = (payload) => {
  return {
    type: "SET_DETAIL_WO",
    payload,
  };
};
