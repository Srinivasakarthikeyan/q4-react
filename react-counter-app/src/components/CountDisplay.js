import React, {Component} from 'react';

class CountDisplay extends Component {
    render() {
        console.log('CountDisplay.render()');
        return (
            <div>
                <span className="badge">{this.props.count}</span>
            </div>
        );
    }
}

export default CountDisplay;