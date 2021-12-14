import { combineReducers } from "redux";
import userLogin from "./user/user-login-reducer";
import userProfile from "./user/user-profile-reducer";
import route from "./route/route.js";
import loading from "./loading-reduce.js";

const rootReducers = combineReducers({
  loading,
  route,
  //login user reducer
  userLogin,
  //profile user
  userProfile,
});

export default rootReducers;
