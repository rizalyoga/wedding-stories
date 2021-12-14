import setError from "./setError";
import setLoading from "./setError";
import setRoute from "./setRoute";
import { setUserLogin, UserLogin } from "./user/user-login";
import { setProfileUser, ProfileUser } from "./user/get-profile-user.js";

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
};

export default allStore;
