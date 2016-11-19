import React, { Component } from 'react';
import EditableTimersList from './EditableTimersList';
import ToggleableTimerForm from './ToggleableTimerForm';

class TimersDashBoard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            timers: [
                {
                    id: uuid.v4(),
                    title: 'Learn JS',
                    project: 'Project A',
                    elapsed: 1234567890,
                    runningSince:null
                }
            ]
        };
    }

    createTimer(timer){
        const t=helpers.newTimer(timer);
        this.setState({timers:this.state.timers.concat(t)});
    }
    deleteTimer(id){
        this.setState({
            timers:this.state.timers.filter(t=>t.id!==id)
        });
    }
    updateTimer(attrs){
         this.setState({
            timers:this.state.timers.map((timer)=>{
                if(timer.id===attrs.id){
                    return Object.assign({},timer,{title:attrs.title,project:attrs.project});
                }else{
                    return timer;
                }
            })
        });
    }

    startTimer(timerId) {
        const now = Date.now();
        this.setState({
        timers: this.state.timers.map((timer) => {
            if (timer.id === timerId) {
            return Object.assign({}, timer, {runningSince: now,});
            } else {
            return timer;
            }
            }),
        });
        
    }
    
    stopTimer(timerId) {
        const now = Date.now();
        this.setState({
        timers: this.state.timers.map((timer) => {
            if (timer.id === timerId) {
            const lastElapsed = now - timer.runningSince;
            return Object.assign({}, timer, {elapsed: timer.elapsed + lastElapsed,runningSince: null,
            });
            } else {
            return timer;
            }
            }),
        });

    }

    handleCreateFormSubmit(timer){
        this.createTimer(timer);
    }
    handleTrashClick(id){
        this.deleteTimer(id);
    }
    handleEditFormSubmit(attrs){
        this.updateTimer(attrs);
    }

    handleStartClick(timerId) {
        this.startTimer(timerId);
    }

    handleStopClick(timerId) {
        this.stopTimer(timerId);
    }

    render() {
        return (
            <div className="ui two column centered grid">

                <div className="column">
                    <EditableTimersList 
                        timers={this.state.timers}
                        onTrashClick={this.handleTrashClick.bind(this)}
                        onFormSubmit={this.handleEditFormSubmit.bind(this)}
                        onStartClick={this.handleStartClick.bind(this)}
                        onStopClick={this.handleStopClick.bind(this)}
                        />
                    <ToggleableTimerForm 
                        onFormSubmit={this.handleCreateFormSubmit.bind(this)} 
                    />
                </div>

            </div>
        );
    }
}

export default TimersDashBoard;