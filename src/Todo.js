import React from 'react';
import PropTypes from 'prop-types';

export default class Todo extends React.Component {

    static propTypes = {
        todoItem: PropTypes.object
    };

    constructor(props){
        super(props);
    }

    componentWillMount() {
        console.log("componentWillMount");
    }

    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps', nextProps.todoItem);
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate')
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate');
        return true;
    }

    render() {
        console.log("render");
        const { todoItem } = this.props;
        return (
            <div>{todoItem}</div>
        )
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate')
    }

    componentDidMount() {
        console.log("componentDidMount");
    }



}

