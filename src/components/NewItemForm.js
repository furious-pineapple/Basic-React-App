import React, { Component } from "react";
import "./NewItemForm.css";

class NewItemForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.addNewItem(this.state.value);
    this.setState({
      value: ""
    });
  }
  render() {
    return (
      <form id="newItemForm" onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Add new item here"
          maxLength="25"
          value={this.state.value}
          onChange={this.handleChange}
        ></input>
        <br />
        <input type="submit" value="submit"></input>
      </form>
    );
  }
}

export default NewItemForm;
