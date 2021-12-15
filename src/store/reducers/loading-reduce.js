const initialState = false;

export default function loadingReducers(state = initialState, action) {
  // console.log("lagi loading dari profile user");
  if (action.type === "SET_LOADING") {
    return action.payload;
  }
  return state;
}
