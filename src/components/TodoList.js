import React, {Component} from 'react';
import Item from './Item';


class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: {[Date.now]: {
                task: 'Clean room',
                complete: false
            }}
        }
    }
    render() {
        return(
            <div> 
                <ul>
                 {Object.keys(this.state.items).map(item => <Item key={item} task={this.state.items[item].task} complete={this.state.items[item].complete}/>)}  
                </ul>
            </div>
        );
    }

}

export default TodoList;