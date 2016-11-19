import React, { Component } from 'react';
import EditableTimer from './EditableTimer';

class EditableTimersList extends Component {

    render() {

        let {timers} = this.props;
        let editableTimers = timers.map((timer,index) => { 
            return (
                <EditableTimer
                    key={index}
                    id={timer.id}
                    title={timer.title}
                    project={timer.project}
                    elapsed={timer.elapsed}
                    runningSince={timer.runningSince}
                    onTrashClick={this.props.onTrashClick}
                    onFormSubmit={this.props.onFormSubmit}
                    onStartClick={this.props.onStartClick}
                    onStopClick={this.props.onStopClick}
                    />
            )
        });

        return (
            <div>
                {editableTimers}
            </div>
        );
    }
}

export default EditableTimersList;