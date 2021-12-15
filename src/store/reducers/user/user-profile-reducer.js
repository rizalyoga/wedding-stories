const initialState = {};

const userProfileReduce = (state = initialState, action) => {
  if (action.type === "SET_PROFILE_USER") {
    // console.log("4. Masuk Reducer:", action);
    return action.payload;
  }

  return state;
};

export default userProfileReduce;
