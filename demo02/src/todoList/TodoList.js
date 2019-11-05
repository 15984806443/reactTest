import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import {
  inputChange,
  getListAx,
  addList,
  deleteItem
} from "../store/actionCreators";

class TodoList extends Component {
  componentDidMount() {
    this.props.getListAx();
  }
  render() {
    const { inputValue, inputChange, list } = this.props;
    const liList = list.map((item, index) => {
      return (
        <li key={index} onClick={() => this.props.deleteItem(index)}>
          {item}
        </li>
      );
    });
    return (
      <Fragment>
        <input value={inputValue} onChange={inputChange} />
        <button onClick={this.props.addList}>提交</button>
        <ul>{liList}</ul>
      </Fragment>
    );
  }
}

const stateToProps = state => {
  return {
    inputValue: state.inputValue,
    list: state.list
  };
};

const dispatchToProps = dispatch => {
  return {
    inputChange(e) {
      const action = inputChange(e.target.value);
      dispatch(action);
    },
    getListAx() {
      const action = getListAx();
      dispatch(action);
    },
    addList() {
      const action = addList();
      dispatch(action);
    },
    deleteItem(index) {
      const action = deleteItem(index);
      dispatch(action);
    }
  };
};

export default connect(
  stateToProps,
  dispatchToProps
)(TodoList);
