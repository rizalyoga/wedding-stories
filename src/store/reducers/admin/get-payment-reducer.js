const initialState = [];

const listPaymentReducer = (state = initialState, action) => {
  if (action.type === "SET_ALL_PAYMENT") {
    // console.log("4. ORDER WO Masuk Reducer:", action);
    return action.payload;
  }

  return state;
};

export default listPaymentReducer;
