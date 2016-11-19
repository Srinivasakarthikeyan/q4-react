import React, { Component } from 'react';

import StarsFrame from './StarsFrame';
import ButtonFrame from './ButtonFrame';
import AnswerFrame from './AnswerFrame';
import NumbersFrame from './NumbersFrame';


class Game extends Component {

    constructor(props) {
        super(props);
        this.state = {
            numOfStars: this.randomNumber(),
            selectedNumbers: [],
            usedNumbers:[],
            redraws: 5,
            correct: null,
            doneStatus:null
        };
    }    

    resetGame() {
        //this.setState({});
    }  

    possibleCombinationSum (arr, n) {
        if (arr.indexOf(n) >= 0) { return true; }
        if (arr[0] > n) { return false; }
        if (arr[arr.length - 1] > n) {
            arr.pop();
            return this.possibleCombinationSum(arr, n);
        }
        var listSize = arr.length, combinationsCount = (1 << listSize)
        for (var i = 1; i < combinationsCount ; i++ ) {
            var combinationSum = 0;
            for (var j=0 ; j < listSize ; j++) {
            if (i & (1 << j)) { combinationSum += arr[j]; }
            }
            if (n === combinationSum) { return true; }
        }
        return false;
    };
    possibleSolution() {
     var numOfStars = this.state.numOfStars,
            possibleNumbers = [],
            usedNumbers = this.state.usedNumbers;

        for (var i=1; i<=9; i++) {
        if (usedNumbers.indexOf(i) < 0) {
            possibleNumbers.push(i);
        }
        }

        return this.possibleCombinationSum(possibleNumbers, numOfStars);
    }
    updateDoneStatus() {
        if (this.state.usedNumbers.length === 9) {
        this.setState({ doneStatus: 'Done. Nice!' });
        return;
        }
        if (this.state.redraws ===0 && !this.possibleSolution()) {
        this.setState({ doneStatus: 'Game Over!' });
        }
    }    
    randomNumber() {
        return Math.floor(Math.random() * 9) + 1
    }
    selectNumber(number) {
        if ((this.state.selectedNumbers.indexOf(number) == -1) && ((this.state.usedNumbers.indexOf(number) == -1)) ){
            this.setState({
                selectedNumbers: this.state.selectedNumbers.concat(number)
            });
        }
    }
    unselectNumber(number) {
        let selectedNumbers = this.state.selectedNumbers,
            indexOfNumber = selectedNumbers.indexOf(number);
        selectedNumbers.splice(indexOfNumber, 1);
        this.setState({ selectedNumbers: selectedNumbers,correct:null});
    }
    sumOfSelectedNumbers() {
        return this.state.selectedNumbers.reduce(function(p,n) {
        return p+n;
        }, 0)
    }
    checkAnswer() {
        let correct = (this.state.numOfStars === this.sumOfSelectedNumbers());
         console.log(correct);
         this.setState({ correct: correct }, function() { 
            //console.log(this.state.correct);
         }); 
         
    }
    acceptAnswer() {
        var usedNumbers = this.state.usedNumbers.concat(this.state.selectedNumbers);
        this.setState({
        selectedNumbers: [],
        usedNumbers: usedNumbers,
        correct: null,
        numOfStars: this.randomNumber()
        }, function() { 
             this.updateDoneStatus();
        });
       
    }
    redraw() {
        if (this.state.redraws > 0) {
        this.setState({
            numOfStars: this.randomNumber(),
            correct: null,
            selectedNumbers: [],
            redraws: this.state.redraws - 1
        }, function() {
            this.updateDoneStatus();
        });
        }
    }
    render() {
        return (
            <div>
                <h2>play9</h2>
                <hr />
                <div className="clearfix">
                    <StarsFrame
                        numOfStars={this.state.numOfStars}
                        />
                    <ButtonFrame
                        selectedNumbers={this.state.selectedNumbers}
                        checkAnswer={this.checkAnswer.bind(this)}
                        correct={this.state.correct}
                        acceptAnswer={this.acceptAnswer.bind(this)}
                        redraw={this.redraw.bind(this)}
                        redraws={this.state.redraws}
                        />
                    <AnswerFrame
                        unselectNumber={this.unselectNumber.bind(this)}
                        selectedNumbers={this.state.selectedNumbers} />
                </div>
                <NumbersFrame
                    selectedNumbers={this.state.selectedNumbers}
                    usedNumbers={this.state.usedNumbers}
                    selectNumber={this.selectNumber.bind(this)}
                    doneStatus={this.state.doneStatus}
                    resetGame={this.resetGame.bind(this)}
                    />
            </div>
        );
    }
}

export default Game;