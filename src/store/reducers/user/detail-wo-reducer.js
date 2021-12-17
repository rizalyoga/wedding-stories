const initialState = {};

const getDetailWo = (state = initialState, action) => {
  if (action.type === "SET_DETAIL_WO") {
    // console.log("4. Masuk Reducer:", action);
    return action.payload;
  }

  return state;
};

export default getDetailWo;
