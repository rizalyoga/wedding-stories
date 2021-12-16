const initialState = "";

const DetailPackageReducer = (state = initialState, action) => {
  if (action.type === "SET_DETAIL_PACKAGE") {
    // console.log("4. PROFILE WO Masuk Reducer:", action);
    return action.payload;
  }

  return state;
};

export default DetailPackageReducer;
