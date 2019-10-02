import React, { Component } from "react";
import Item from "./Item";
import AddNewItem from "./NewItemForm";
import "./TodoList.css";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      items: {
        [Date.now()]: {
          task: "Clean room",
          complete: false
        }
      }
    };
    this.addNewItem = this.addNewItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }
  addNewItem(item) {
    if (item) {
      this.setState(prevState => {
        let items = { ...prevState.items };
        items[Date.now()] = {
          task: item,
          complete: false
        };
        return { items };
      });
    }
  }
  removeItem(itemId) {
    this.setState(prevState => {
      let items = { ...prevState.items };
      delete items[itemId];
      return { items };
    });
  }
  render() {
    const list = Object.keys(this.state.items).map(key => {
      return (
        <Item
          key={key}
          id={key}
          task={this.state.items[key].task}
          complete={this.state.items[key].complete}
          removeItem={this.removeItem}
        />
      );
    });
    return (
      <div id="TodoList">
        {list}
        <AddNewItem addNewItem={this.addNewItem} />
      </div>
    );
  }
}

export default TodoList;
