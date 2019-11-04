import { CHANGE_INPUT, UPDATELIST } from "./actionTypes";

const defaultState = {
  inputValue: "",
  list: [
    "八点开晨会，分配今天的代码任务",
    "九点和项目开需求沟通会",
    "十点开始敲代码"
  ]
};

export default (state = defaultState, action) => {
  //reducer里只能接收state，不能改变state
  let newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case CHANGE_INPUT:
      newState.inputValue = action.value;
      break;
    case UPDATELIST:
      newState.list = action.value;
      newState.inputValue = "";
      break;
    default:
      break;
  }
  return newState;
};
