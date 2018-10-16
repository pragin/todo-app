import React, { Component } from "react";

export default class AddTodo extends Component {
  render() {
    return (
      <div className="add-todo-form" id="overlay-form">
        <form>
          <div className="form-group row">
            <div className="col-sm-2">
              <label className="col-form-label" htmlFor="todoTitletxt">
                Title :{" "}
              </label>
            </div>
            <div className="col-sm-6">
              <input
                type="text"
                className="form-control"
                id="todoTitletxt"
                placeholder="Enter Todo Title"
              />
            </div>
          </div>
          <div className="form-group row">
            <div className=" col-sm-2 ">
              <label className="col-form-label" htmlFor="todoDesctxt">
                Description :{" "}
              </label>
            </div>
            <div className=" col-sm-6">
              <input
                type="text"
                className="form-control"
                id="todoDesctxt"
                placeholder="Enter Todo Description"
              />
            </div>
          </div>

          <fieldset className="form-group">
            <div className="row">
              <legend className="col-form-label col-sm-2 pt-0" />
              <div className="col-sm-6">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gridRadios"
                    id="low-priority-radio"
                    value="option1"
                    defaultChecked
                  />
                  <label
                    className="form-check-label"
                    htmlFor="low-priority-radio"
                  >
                    First radio
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gridRadios"
                    id="high-priority-radio"
                    value="option2"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="high-priority-radio"
                  >
                    Second radio
                  </label>
                </div>
              </div>
            </div>
          </fieldset>
          <div className="form-group row">
            <div className="col-sm-2">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={this.props.showForm}
              >
                Add Todo
              </button>
            </div>
            <div className="col-sm-2">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={this.props.showForm}
              >
                Close
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
