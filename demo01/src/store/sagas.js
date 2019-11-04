import { takeEvery, put } from 'redux-saga/effects';
import { GET_MY_LIST } from "./actionTypes";
import { updateList } from "../store/actionCreators";
import axios from 'axios';

function* mySaga(){
    yield takeEvery(GET_MY_LIST,getList)
}

function* getList(){
    const res = yield axios.get("http://localhost/blog/client/live2d/getLive2d.php");
    const data = res.data.data;
    let arr = []
    data.map((item)=>{
        return arr.push(item.content)
    })
    const action = updateList(arr);
    yield put(action);
}

export default mySaga;