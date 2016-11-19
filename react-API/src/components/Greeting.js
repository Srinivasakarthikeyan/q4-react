
import React, { Component, PropTypes } from 'react';

class Greeting extends React.Component {

    constructor(props) {
        super(props);
        console.log('Greeting.constructor');
        // console.dir(props);
        // The constructor is the right place to initialize state
        this.state = {};
    }

    componentWillMount() {
        console.log('Greeting.componentWillMount()');
    }

    componentDidMount() {
        console.log('Greeting.componentDidMount()');
        // N/W ing call
        //this.setState({message:"Hello From Server"});
    }

    
    componentWillReceiveProps(nextProps) {
        console.log('Greeting.componentWillReceiveProps() - ');
        console.dir(nextProps);
    }

    shouldComponentUpdate(nextProps, nextState) {
        //...
        return true;
    }    
    
    componentWillUpdate(nextProps,nextState) {
        console.log('Greeting.componentWillUpdate() - ');
    }

    componentDidUpdate() {
         console.log('Greeting.componentDidUpdate() - ');
    }

    componentWillUnmount() {
        console.log('Greeting.componentWillUnmount() - ');
    }

    render() {
        console.log('Greeting.render()');
        return <h1>Hello, {this.props.name}</h1>;
  }
    
}

export default Greeting;