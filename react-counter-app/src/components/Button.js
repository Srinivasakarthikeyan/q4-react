import React, { Component } from 'react';

class Button extends Component {

    // clickHandler(e) {
    //     this.props.clickHandler(this.props.incrementBy);
    // }

    render() {

        // let clickHandler = this.props.clickHandler;
        // let incrementBy = this.props.incrementBy;

        let {clickHandler, incrementBy} = this.props;
        
        console.log('Button.render()');
        return (
                <button className="btn btn-primary"
                        onClick={()=>clickHandler(incrementBy)}>
                +{this.props.incrementBy}
                </button>
        );
    }
}

export default Button;