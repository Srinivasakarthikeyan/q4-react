
import React, { Component } from 'react';
import Button from './Button';
import CountDisplay from './CountDisplay';

class App extends Component{

    constructor() {
        super();
        this.state = {count:0};
    }

    incrementCount(inc) {
         this.setState({count:this.state.count+inc});
    }

    render() {
         console.log('App.render()');
        return (
            <div className="well">
                <Button clickHandler={this.incrementCount.bind(this)} incrementBy={1}/>
                <Button clickHandler={this.incrementCount.bind(this)} incrementBy={10}/>
                <Button clickHandler={this.incrementCount.bind(this)} incrementBy={100}/>
                <hr/>
                <CountDisplay count={this.state.count}/>
            </div>
        );
    }

}

export default App;