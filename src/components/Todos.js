import React, { Component } from "react";
import TodoItem from "./TodoItem";

export default class Todos extends Component {
  render() {
    let todoItems = this.props.todos.map(todo => (
      <TodoItem key={todo.title} todo={todo} />
    ));
    return <div className="card-deck">{todoItems}</div>;
  }
}
