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
import { setMyPackage, getMyPackage } from "./organizer/get-list-package.js";
import { setHistory, getHistory } from "./user/get-history.js";
import { setEditUser, postEditUser } from "./user/edit-profile.js";
import { setSearchPackage, getSearchPackage } from "./package/get-search-package";
import { setMyOrder, getMyOrder } from "./organizer/get-list-order";
import { setPostPayment, postPayment } from "./user/post-payment.js";
import { setAllPayment, getAllPayment } from "./admin/get-all-payment.js";

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
  //getPavkageOrganizer
  setMyPackage,
  getMyPackage,
  //getHistoryOrder
  setHistory,
  getHistory,
  //EDIT USERS
  setEditUser,
  postEditUser,
  //getSearchPackage
  setSearchPackage,
  getSearchPackage,
  //getMyOrder
  setMyOrder,
  getMyOrder,
  //postPayment
  setPostPayment,
  postPayment,
  //getALLPayment
  setAllPayment,
  getAllPayment,
};

export default allStore;
