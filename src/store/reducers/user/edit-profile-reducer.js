const initialState = {};

const editUserReduce = (state = initialState, action) => {
  if (action.type === "SET_EDIT_USER") {
    console.log("4. Data Edit Masuk Reducer Bos:", action);
    return action.payload;
  }

  return state;
};

export default editUserReduce;
