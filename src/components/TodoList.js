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
      items: [
        {
          task: "Clean room",
          complete: false
        }
      ]
    };
    this.addNewItem = this.addNewItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.updateStatus = this.updateStatus.bind(this);
  }
  addNewItem(item) {
    this.setState(prevState => {
      let items = [...prevState.items];
      items.unshift({
        task: item,
        status: false
      });
      return { items };
    });
  }
  removeItem(itemIndex) {
    this.setState(prevState => {
      let items = [...prevState.items];
      items.splice(itemIndex, 1);
      return { items };
    });
  }
  updateStatus(itemIndex) {
    this.setState(prevState => {
      let items = [...prevState.items];
      items[itemIndex].status = !items[itemIndex].status;
      return { items };
    });
  }
  render() {
    const completed = [];
    const incompleted = [];
    for (let i = 0; i < this.state.items.length; i++) {
      const item = (
        <Item
          key={i}
          item={this.state.items[i]}
          removeItem={() => this.removeItem(i)}
          updateStatus={() => this.updateStatus(i)}
        />
      );
      if (this.state.items[i].status) {
        completed.push(item);
      } else {
        incompleted.push(item);
      }
    }
    return (
      <div id="TodoList">
        <AddNewItem addNewItem={this.addNewItem} />
        <DisplayList
          className="listDisplay"
          title="Todo List"
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
