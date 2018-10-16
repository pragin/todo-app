import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import AddTodo from "./AddTodo";

export default class AdminPanel extends Component {
  render() {
    return (
      <div className="admin">
        <div className="admin-control-wrapper">
          <button
            type="button"
            className="btn btn-secondary admin-control"
            onClick={this.props.showForm}
          >
            <FontAwesomeIcon icon={faPlus} size="2x" />
            <span className="space" />
            Add Todo
          </button>
        </div>
      </div>
    );
  }
}
