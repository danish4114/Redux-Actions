import React from "react";
import Redux from "react-redux";
import Todo from "./component";
import { connect } from "react-redux";
import { completed, editTodo, deleteTodo } from "./createActions";

const mapStatusToProps = state => {
  return {
    content: state
  };
};
const mapDispatchToProps = dispatch => ({
  onChange: id => dispatch(completed(id)),
  onClick: (newValue, index) => dispatch(editTodo(newValue, index)),
  onDelete: index => dispatch(deleteTodo(index))
});
const statusContent = connect(
  mapStatusToProps,
  mapDispatchToProps
)(Todo);
export default statusContent;
