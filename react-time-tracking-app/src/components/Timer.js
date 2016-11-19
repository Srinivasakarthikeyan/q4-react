import React, { Component } from 'react';
import TimerActionButton from './TimerActionButton';

class Timer extends Component {


    componentDidMount(){
        this.forceUpdateInterval=setInterval(()=>{
            this.forceUpdate();
        },50);
    }
    componentWillUnmount(){
        clearInterval( this.forceUpdateInterval);
    }

    render() {
        console.log("Timer.render()");
        //let elapsedString = helpers.renderElapsedString(this.props.elapsed);
        const elapsedString = helpers.renderElapsedString(this.props.elapsed,this.props.runningSince);
        return (
            <div className="ui centered card">
                <div className="content">
                    <div className="header">
                      {this.props.title}
                    </div>
                    <div className="meta">
                       {this.props.project}
                    </div>
                    <div className="center aligned description">
                        <h2>{elapsedString}</h2>
                    </div>
                    <div className="extra content">
                        <span className="right floated edit icon" onClick={()=>{this.props.onEditClick()}}>
                            <i className="edit icon"></i>
                        </span>
                    </div>
                    <div className="extra content">
                        <span className="right floated trash icon" onClick={()=>{this.props.onTrashClick(this.props.id)}}>
                            <i className="trash icon"></i>
                        </span>
                    </div>
                </div>
                <div className="ui botton attached blue basic button">
                    
                    <TimerActionButton 
                         timerIsRunning={!!this.props.runningSince}
                         onStartClick={()=>{this.props.onStartClick(this.props.id)}}
                         onStopClick={()=>{this.props.onStopClick(this.props.id)}}
                    />

                </div>
            </div>
        );
    }
}

export default Timer;