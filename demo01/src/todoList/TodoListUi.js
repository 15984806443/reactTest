import React, { Fragment } from "react";
import { Input, Button, List } from "antd";

const TodoListUi = props => {
  const { list, inputValue } = props.state;
  return (
    <Fragment>
      <div style={{ margin: "10px" }}>
        <Input
          placeholder="write something"
          style={{ width: "250px", marginRight: "10px" }}
          value={inputValue}
          onChange={props.changeValue}
        />
        <Button type="primary" onClick={props.add}>
          增加
        </Button>
      </div>
      <div style={{ margin: "10px", width: "300px" }}>
        <List
          bordered
          dataSource={list}
          renderItem={(item, index) => (
            <List.Item onClick={() => props.delete(index)}>{item}</List.Item>
          )}
        />
      </div>
    </Fragment>
  );
};

export default TodoListUi;
