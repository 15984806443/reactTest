import React, { Component, Fragment } from "react";
import "antd/dist/antd.css";
import TodoListUi from "./TodoListUi";
import store from "../store";
import { changeInputAction, updateList } from "../store/actionCreators";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: store.getState().list,
      inputValue: store.getState().inputValue
    };
    store.subscribe(this.storeChange.bind(this));
  }

  storeChange() {
    this.setState({
      list: store.getState().list,
      inputValue: store.getState().inputValue
    });
  }

  changeValue(e) {
    const action = changeInputAction(e.target.value);
    store.dispatch(action);
  }

  add() {
    let list = this.state.list;
    list.push(this.state.inputValue);
    const action = updateList(list);
    store.dispatch(action);
  }

  delete(index) {
    let list = this.state.list;
    list.splice(index, 1);
    const action = updateList(list);
    store.dispatch(action);
  }

  render() {
    return (
      <Fragment>
        <TodoListUi
          state={this.state}
          changeValue={this.changeValue.bind(this)}
          add={this.add.bind(this)}
          delete={this.delete.bind(this)}
        />
      </Fragment>
    );
  }
}
export default TodoList;
