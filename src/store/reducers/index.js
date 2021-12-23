import { combineReducers } from "redux";
import userLogin from "./user/user-login-reducer";
import userProfile from "./user/user-profile-reducer";
import profileWo from "./organizer/profile-wo-reducer.js";
import route from "./route/route.js";
import loading from "./loading-reduce.js";
import getAllPackage from "./package/all-package-reducer.js";
import getDetailPackage from "./package/detail-package-reduce.js";
import detailWo from "./user/detail-wo-reducer.js";
import postOrder from "./user/order-reducer.js";
import myPackage from "./organizer/list-package-reducer.js";
import myHistory from "./user/history-user-reducer.js";
import editUser from "./user/edit-profile-reducer.js";
import searchPackage from "./package/get-search-reducer.js";

const rootReducers = combineReducers({
  loading,
  route,
  //login user reducer
  userLogin,
  //profile user
  userProfile,
  //profile wo
  profileWo,
  //get all package
  getAllPackage,
  //getDetailPackage
  getDetailPackage,
  //getDetailWo
  detailWo,
  //postOrder
  postOrder,
  //getMyPackage
  myPackage,
  //getHistoryOrderUser
  myHistory,
  //editProfileUser
  editUser,
  //getSearchPackage
  searchPackage,
});

export default rootReducers;
