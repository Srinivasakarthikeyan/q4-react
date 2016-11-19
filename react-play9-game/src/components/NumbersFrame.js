import React, {Component} from 'react';
import DoneFrame from './DoneFrame';

class NumbersFrame extends Component {

    render() {

        let numbers = []; 
        let {selectNumber,selectedNumbers,usedNumbers,doneStatus,resetGame} = this.props;

        for (let i = 1; i < 10; i++){
            let className = "number selected-" + (selectedNumbers.indexOf(i) > -1);
                className +=" used-"+(usedNumbers.indexOf(i) > -1)
            numbers.push(
                <span key={i}
                      className={className}
                      onClick={() => { selectNumber(i) } }>
                    {i}
                </span>
            );
        }

        if (doneStatus) {
            return (<DoneFrame doneStatus={doneStatus} resetGame={resetGame}/>);
        } else {
            return (
                <div id="numbers-frame">
                    <div className="well">
                        {numbers}
                    </div>
                </div>
            );
        }
    }
}

export default NumbersFrame;