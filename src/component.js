import React from "react";
import PropTypes from "prop-types";
import "./App.css";
import _ from "lodash";
import AddTodo from "./addtodo";

class Todo extends React.Component {
  constructor(props) {
    super(props);
  }
  HandleChange = event => {
    this.setState({ value: event.target.id });
    this.props.onChange(event.target.id);
  };
  editTodo = event => {
    this.setState({ value: event.target.value });
    this.props.onClick(event.target.value, event.target.id);
  };
  deleteHandle = event => {
    this.setState({ value: event.target.id });
    this.props.onDelete(event.target.id);
  };
  render() {
    const result = _.map(this.props.content, (data, index) => {
      return (
        <div className="child" key={data.id}>
          <input
            type="checkbox"
            checked={data.completed}
            id={index}
            onChange={this.HandleChange}
          />
          <label>
            <input
              className="forEdit"
              id={index}
              type="text"
              value={data.name}
              onChange={this.editTodo}
            />
          </label>
          <button
            className="btn-xsm btn-danger"
            id={index}
            onClick={this.deleteHandle}
            id={index}
            type="button"
          >
            Delete!
          </button>
          {data.completed && <span className="badge">completed</span>}
        </div>
      );
    });
    return (
      <div className="container">
        {result}
        <AddTodo />
      </div>
    );
  }
}

export default Todo;
