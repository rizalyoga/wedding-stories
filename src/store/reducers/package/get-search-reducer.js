const initialState = [];

const SearchPackageReducer = (state = initialState, action) => {
  if (action.type === "SET_SEARCH_PACKAGE") {
    // console.log("4. data SEARCH Masuk Reducer:", action);
    return action.payload;
  }

  return state;
};

export default SearchPackageReducer;
