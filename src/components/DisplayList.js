import React, { Component } from "react";
import "./DisplayList.css";

class DisplayList extends Component {
  constructor() {
    super();
    this.state = {
      counter: 1
    };
    this.increaseCount = this.increaseCount.bind(this);
  }
  increaseCount(e) {
    e.preventDefault();
    this.setState(prevStat => {
      return { counter: prevStat.counter + 1 };
    });
  }
  decreaseCount() {
    this.setState(prevStat => {
      return { counter: prevStat.counter - 1 };
    });
  }
  render() {
    const maxItems = this.state.counter * 5;
    const itemsToDisplay = this.props.items.slice(0, maxItems);
    const shouldButtonDisplay =
      itemsToDisplay.length !== this.props.items.length;
    if (maxItems > 1 && itemsToDisplay.length <= maxItems - 5) {
      this.decreaseCount();
    }
    return (
      <div className="list">
        <h3>{this.props.title}</h3>
        {itemsToDisplay}
        {shouldButtonDisplay ? (
          <button onClick={this.increaseCount}>Load More</button>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default DisplayList;
