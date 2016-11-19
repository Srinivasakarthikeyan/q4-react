import React, {Component} from 'react';

class StarsFrame extends Component {
    
    render() {

        let numOfStars = this.props.numOfStars;
        let stars = [];
        for (let i = 0; i < numOfStars; i++){
            stars.push(
                <span key={i} className="glyphicon glyphicon-star"></span>
            );
        }

        return (
            <div id="stars-frame">
                <div className="well">
                    {stars}
                </div>
            </div>
        );
    }
}

export default StarsFrame;