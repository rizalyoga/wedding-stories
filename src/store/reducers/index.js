import { combineReducers } from "redux";
import userLogin from "./user/user-login-reducer";
import userProfile from "./user/user-profile-reducer";
import profileWo from "./organizer/profile-wo-reducer.js";
import route from "./route/route.js";
import loading from "./loading-reduce.js";

const rootReducers = combineReducers({
  loading,
  route,
  //login user reducer
  userLogin,
  //profile user
  userProfile,
  //profile wo
  profileWo,
});

export default rootReducers;
