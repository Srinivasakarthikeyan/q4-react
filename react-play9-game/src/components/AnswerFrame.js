import React, {Component} from 'react';

class AnswerFrame extends Component {
    render() {

        let {selectedNumbers,unselectNumber} = this.props;
       
        let numbers=selectedNumbers.map((number, index) => { 
            return (
                <span onClick={() => { unselectNumber(number) }}
                      className="number"
                      key={index}>
                    {number}
                </span>
            );
        });

        return (
            <div id="answer-frame">
                <div className="well">
                    {numbers}
                </div>    
            </div>
        );
    }
}

export default AnswerFrame;