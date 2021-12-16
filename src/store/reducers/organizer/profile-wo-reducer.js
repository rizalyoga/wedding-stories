const initialState = {};

const ProfileWoReduce = (state = initialState, action) => {
  if (action.type === "SET_PROFILE_WO") {
    // console.log("4. PROFILE WO Masuk Reducer:", action);
    return action.payload;
  }

  return state;
};

export default ProfileWoReduce;
