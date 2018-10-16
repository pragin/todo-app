import React, { Component } from "react";
import Todos from "./Todos";

import AdminPanel from "./AdminPanel";
import "../css/index.css";
import AddTodo from "./AddTodo";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      isHidden: true,
      todos: [
        {
          title: "Cook",
          desc: "Prepare Lunch",
          status: "todo",
          priority: "low",
          date: new Date()
        },
        {
          title: "Shower",
          desc: "Take Shower",
          status: "completed",
          priority: "high",
          date: new Date().toLocaleString()
        },
        {
          title: "sleep",
          desc: "Take Shower",
          status: "todo",
          priority: "high",
          date: new Date().toLocaleString()
        },
        {
          title: "School",
          desc: "Take Shower",
          status: "todo",
          priority: "low",
          date: new Date().toLocaleString()
        },
        {
          title: "Eat",
          desc: "Take Shower",
          status: "todo",
          priority: "low",
          date: new Date().toLocaleString()
        },
        {
          title: "Work",
          desc: "Take Shower",
          status: "todo",
          priority: "low",
          date: new Date().toLocaleString()
        },
        {
          title: "xxx",
          desc: "Take Shower",
          status: "todo",
          priority: "low",
          date: new Date().toLocaleString()
        }
      ]
    };
  }

  showForm() {
    this.setState({ isHidden: !this.state.isHidden });
  }
  render() {
    return (
      <div>
        <h1>Todos</h1>
        <div className="container-fluid cont">
          <div className="row">
            <div className="col-md-2">
              <AdminPanel showForm={this.showForm.bind(this)} />
            </div>
            <div className="col-md-9">
              <Todos todos={this.state.todos} />
            </div>
          </div>
          {!this.state.isHidden && (
            <AddTodo showForm={this.showForm.bind(this)} />
          )}
        </div>
      </div>
    );
  }
}
