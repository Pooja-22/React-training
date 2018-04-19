import React from 'react';
import PropTypes from 'prop-types';

export default class Hola extends React.Component {

    constructor(props){
        super(props);
        this.state = {
          holaState:0
        };
        console.log('HOLA :: constructor');
    }

    UNSAFE_componentWillMount() {
        console.log("HOLA :: UNSAFE_componentWillMount");
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        console.log(`HOLA :: UNSAFE_componentWillReceiveProps 
                                    nextProps :: ${nextProps.myProp}
                                    --------
                                    currentProps :: ${this.props.myProp}
                                    currentState :: ${this.state.holaState}`);
    }

    // static getDerivedStateFromProps(nextProps, prevState){
    //     console.log(`HOLA :: getDerivedStateFromProps
    //                                 nextProps :: ${nextProps.myProp}
    //                                 prevState :: ${prevState.myProp}`);
    //     return null;
    // }

    UNSAFE_componentWillUpdate(nextProps, nextState) {
        console.log(`HOLA :: UNSAFE_componentWillUpdate 
                                    nextProp  :: ${nextProps.myProp} 
                                    nextState :: ${nextState.holaState}
                                    ----------
                                    currentProps :: ${this.props.myProp}
                                    currentState :: ${this.state.holaState}`);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log(`HOLA :: shouldComponentUpdate 
                                    nextProp  :: ${nextProps.myProp} 
                                    nextState :: ${nextState.holaState}
                                    ---------
                                    currentProps :: ${this.props.myProp}
                                    currentState :: ${this.state.holaState}`);
        return true;
    }

    // getSnapshotBeforeUpdate(prevProps, prevState) {
    //     return 'snapshotData'
    // }

    render() {
        console.log("HOLA :: render");
        return (
            <div>
                <h1>THE HOLA Component</h1>
                <div>my prop is : {this.props.myProp}</div>
                <div>my state is : {this.state.holaState}</div>
                <button onClick={() => this._onClick('mola')}>mola</button>
                <button onClick={() => this._onClick('pola')}>pola</button>
            </div>
        )
    }

    _onClick = (val)=> {
        this.setState({
            holaState: val
        });
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(`HOLA :: componentDidUpdate
                                    prevProp  :: ${prevProps.myProp} 
                                    prevState :: ${prevState.holaState}
                                    snapshot  :: ${snapshot}
                                    -------------
                                    currentProps :: ${this.props.myProp}
                                    currentState :: ${this.state.holaState}`);
    }

    componentDidMount() {
        console.log("HOLA :: componentDidMount");
    }


    componentWillUnmount() {
        console.log("HOLA :: componentWillUnmount");
    }

}

