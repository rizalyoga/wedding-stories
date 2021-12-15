import setError from "./setError";
import setLoading from "./setLoading";
import setRoute from "./setRoute";
import { setUserLogin, UserLogin } from "./user/user-login";
import { setProfileUser, ProfileUser } from "./user/get-profile-user.js";
import { setProfileWo, fetchProfileWo } from "./organizer/profile-wo.js";

const allStore = {
  setError,
  setLoading,
  setRoute,
  //LoginUser
  setUserLogin,
  UserLogin,
  //setProfil
  setProfileUser,
  ProfileUser,
  //setProfileWo
  setProfileWo,
  fetchProfileWo,
};

export default allStore;
