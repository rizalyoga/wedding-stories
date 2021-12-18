import setError from "./setError";
import setLoading from "./setLoading";
import setRoute from "./setRoute";
import { setUserLogin, UserLogin } from "./user/user-login";
import { setProfileUser, ProfileUser } from "./user/get-profile-user.js";
import { setProfileWo, fetchProfileWo } from "./organizer/profile-wo.js";
import { setAllPackage, getAllPackage } from "./package/get-all-packet.js";
import { setDetaiilPackage, detailPackage } from "./package/detail-package.js";
import { setDetailWo, getDetailWo } from "./user/get-profile-wo.js";
import { setPostOrder, postOrder } from "./user/post-order.js";

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
  //getAllPackage
  setAllPackage,
  getAllPackage,
  //detailPackage
  setDetaiilPackage,
  detailPackage,
  //getProfileWo
  setDetailWo,
  getDetailWo,
  //postOrder
  setPostOrder,
  postOrder,
};

export default allStore;
