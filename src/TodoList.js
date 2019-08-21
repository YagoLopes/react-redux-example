import React from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
const TodoList = props => {
  return (
    <ul>
      {props.todos.map(todos => (
        <li key={todos.id}>{todos.text}</li>
      ))}
    </ul>
  );
};

TodoList.prototype = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        text: PropTypes.string,
    })).isRequired,
};


const mapStateToProps = state => ({
  todos: state.todos
});
export default connect(mapStateToProps)(TodoList);
