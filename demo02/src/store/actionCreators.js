import { INPUT_CHANGE, ADD_LIST, DELETE_ITEM, GET_LIST } from "./actionTypes";
import axios from "axios";

export const inputChange = value => ({
  type: INPUT_CHANGE,
  value
});

export const addList = () => ({
  type: ADD_LIST
});

export const getList = value => ({
  type: GET_LIST,
  value
});

export const deleteItem = value => ({
  type: DELETE_ITEM,
  value
});

export const getListAx = () => {
  return dispatch => {
    axios.get("http://localhost/blog/client/live2d/getLive2d.php").then(res => {
      let data = res.data.data;
      let arr = [];
      data.map(item => {
        return arr.push(item.content);
      });
      const action = getList(arr);
      dispatch(action);
    });
  };
};
