const initialState = [];

const AllPackageReducer = (state = initialState, action) => {
  if (action.type === "SET_MY_HISTORY") {
    // console.log("4. PROFILE WO Masuk Reducer:", action);
    return action.payload;
  }

  return state;
};

export default AllPackageReducer;
