import React from 'react';

import Todo from './Todo';

export default class App extends React.Component {

    constructor() {
        super();
        this.state = {
            todoItem: '',
            list: [],
        };
    }

    setTodoItem = (e) => {
        this.setState({
            todoItem: e.target.value
        });
    };

    addTodos = () => {
        const { todoItem, list } = this.state;
        const updatedArray = [...list, todoItem];
        this.setState({
            list: updatedArray,
            todoItem: '',
        });
    };

    render() {
        const { todoItem, list } = this.state;

        return (
            <div>
                <span>To Do List</span>

                <input value={todoItem} onChange={this.setTodoItem}/>
                <button onClick={this.addTodos}>Add</button>

                {list.map((item, index) => {
                    console.log(typeof item)
                    return (<Todo todoItem={item} key={index} />)
                })}
            </div>
        )
    }
}