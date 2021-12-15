const initialState = {};

const userLoginReduce = (state = initialState, action) => {
  if (action.type === "SET_ROUTE") {
    // console.log("4. Masuk Reducer Routing:", action);
    return action.payload;
  }

  return state;
};

export default userLoginReduce;
