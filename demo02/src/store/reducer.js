import { INPUT_CHANGE, ADD_LIST, DELETE_ITEM, GET_LIST } from "./actionTypes";

const defaultState = {
  inputValue: "hello",
  list: []
};

export default (state = defaultState, action) => {
  let newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case INPUT_CHANGE:
      newState.inputValue = action.value;
      break;
    case GET_LIST:
      newState.list = action.value;
      break;
    case ADD_LIST:
      newState.list.push(state.inputValue);
      newState.inputValue = "";
      break;
    case DELETE_ITEM:
      newState.list.splice(action.value, 1);
      break;
    default:
      break;
  }
  return newState;
};
