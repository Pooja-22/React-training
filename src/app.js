import React from 'react';
import PropTypes from 'prop-types';
import Hola from './Hola';

const env = process.env.NODE_ENV;

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            propForHola: 0,
            isHola : true
        };
        //console.log('APP :: constructor');
    }

    componentWillMount() {
        //console.log("APP :: componentWillMount");
    }

    componentWillReceiveProps(nextProps) {
        //console.log('APP :: componentWillReceiveProps', nextProps.todoItem);
    }

    componentWillUpdate(nextProps, nextState) {
        //console.log('APP :: componentWillUpdate')
    }

    shouldComponentUpdate(nextProps, nextState) {
        //console.log('APP :: shouldComponentUpdate');
        return true;
    }

    render() {
        //console.log('APP :: render');
        return (
            <div>
                <button onClick={() => this._onClick('bola')}>bola</button>
                <button onClick={() => this._onClick('tola')}>tola</button>
                <button onClick={() => this._toggleHola()}>remove Hola</button>
                {
                    this.state.isHola?
                        <Hola myProp={this.state.propForHola}></Hola>
                        :
                        null
                }
            </div>
        )
    }
    _onClick = (val) => {
        this.setState({
            propForHola: val
        });
    }

    _toggleHola = () =>{
        this.setState({isHola : !this.state.isHola});
    };

    componentDidUpdate(prevProps, prevState) {
        //console.log('APP :: componentDidUpdate')
    }

    componentDidMount() {
        //console.log("APP :: componentDidMount");
    }
}