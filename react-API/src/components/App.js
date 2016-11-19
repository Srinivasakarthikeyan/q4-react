import React, { Component } from 'react';
import Greeting from './Greeting';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {name:"Guest"};
    }

    clickHandler(name) {
        this.setState({name});
    }

    render() {
        console.log('App.render()');

        let greet = null;        
        if (this.state.name !== 'world') {
            greet = <Greeting name={this.state.name} />;
        }        

        return (
            <div>
                {greet}
                <hr />
                <button onClick={()=>this.clickHandler('Q4')}>Hello Q4</button>
                <button onClick={()=>this.clickHandler('world')}>Hello World</button>
            </div>
        );
    }
}

export default App;