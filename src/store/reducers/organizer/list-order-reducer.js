const initialState = [];

const MyOrderReducer = (state = initialState, action) => {
  if (action.type === "SET_MY_ORDER") {
    // console.log("4. ORDER WO Masuk Reducer:", action);
    return action.payload;
  }

  return state;
};

export default MyOrderReducer;
