import { CHANGE_INPUT, UPDATELIST, GET_MY_LIST } from "./actionTypes";
import axios from 'axios';

export const changeInputAction = value => ({
  type: CHANGE_INPUT,
  value
});

export const updateList = value => ({
  type: UPDATELIST,
  value
});

export const getTodolist = ()=>{
  return (dispatch)=>{
    axios.get("http://localhost/blog/client/live2d/getLive2d.php").then((res)=>{
      let data = res.data.data;
      let arr = []
      data.map((item)=>{
        return arr.push(item.content)
      })
      const action = updateList(arr);
      dispatch(action);
    })
  }
}

export const getMyListAction = ()=>({
  type:GET_MY_LIST,
})