import React, { Component } from "react";
import AddNewItem from "./NewItemForm";
import DisplayList from "./DisplayList";
import Item from "./Item";
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
    this.updateStatus = this.updateStatus.bind(this);
  }
  addNewItem(item) {
    this.setState(prevState => {
      let items = { ...prevState.items };
      items[Date.now()] = {
        task: item,
        status: false
      };
      return { items };
    });
  }
  removeItem(itemId) {
    this.setState(prevState => {
      let items = { ...prevState.items };
      delete items[itemId];
      return { items };
    });
  }
  updateStatus(itemId) {
    this.setState(prevState => {
      let items = { ...prevState.items };
      items[itemId].status = !items[itemId].status;
      return { items };
    });
  }
  render() {
    const completed = [];
    const incompleted = [];
    Object.keys(this.state.items).forEach(key => {
      const item = (
        <Item
          key={key}
          id={key}
          task={this.state.items[key].task}
          status={this.state.items[key].status}
          removeItem={() => this.removeItem(key)}
          updateStatus={() => this.updateStatus(key)}
        />
      );
      if (this.state.items[key].status) {
        completed.push(item);
      } else {
        incompleted.push(item);
      }
    });
    return (
      <div id="TodoList">
        <AddNewItem addNewItem={this.addNewItem} />
        <DisplayList
          className="listDisplay"
          title="Incompleted List"
          items={incompleted}
        />
        <DisplayList
          className="listDisplay"
          title="Completed List"
          items={completed}
        />
      </div>
    );
  }
}

export default TodoList;
