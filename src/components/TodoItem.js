import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

export default class TodoItem extends Component {
  constructor() {
    super();
    this.state = {
      isHidden: true
    };
  }

  showEditButton() {
    this.setState({ isHidden: !this.state.isHidden });
  }

  render() {
    const todo = this.props.todo;
    const cardSize = {
      width: "300px",
      height: "300px"
      // border: "1px solid red"
    };
    return (
      <div key={todo.title} className="col col-sm-12 col-md-3" style={cardSize}>
        <div
          className={"card " + todo.priority}
          onMouseEnter={this.showEditButton.bind(this)}
          onMouseLeave={this.showEditButton.bind(this)}
        >
          <div className="card-header">
            {todo.title}
            {!this.state.isHidden && (
              <button className="edit-btn">
                <FontAwesomeIcon icon={faEdit} />
              </button>
            )}
          </div>
          <div className="card-body">
            <p className="card-text">{todo.desc}</p>
          </div>
          <div className="card-footer text-muted">
            {"status : " + todo.status}
          </div>
        </div>
      </div>
    );
  }
}
