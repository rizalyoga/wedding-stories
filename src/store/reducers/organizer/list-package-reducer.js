const initialState = [];

const MyPackageReducer = (state = initialState, action) => {
  if (action.type === "SET_MY_PACKAGE") {
    // console.log("4. PROFILE WO Masuk Reducer:", action);
    return action.payload;
  }

  return state;
};

export default MyPackageReducer;
