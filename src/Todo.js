import React from 'react';
import PropTypes from 'prop-types';

export default class Todo extends React.Component {

    componentWillMount() {
        console.log("Mounting")
    }

    componentDidMount() {
        console.log("Did Mount")
    }

    componentWillReceiveProps(props) {
        console.log('componentWillReceiveProps', props.todoItem, this.props.todoItem)
    }

    componentWillUpdate() {
        console.log('componentWillUpdate')
    }

    componentDidUpdate() {
        console.log('componentDidUpdate')
    }

    shouldComponentUpdate() {
        console.log('shouldComponentUpdate')
        return true;
    }
    
    
    render() {
        console.log("Inside todo render")
        const { todoItem } = this.props;
        return (
            <div>{todoItem}</div>
        )
    }
}

Todo.propTypes = {
    todoItem: PropTypes.number,
}