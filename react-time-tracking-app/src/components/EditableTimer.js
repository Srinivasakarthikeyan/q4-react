import React, { Component } from 'react';
import Timer from './Timer';
import TimerForm from './TimerForm';

class EditableTimer extends Component {

    constructor(props) {
        super(props);
        this.state = {editFormOpen:false};
    }

    openForm(){
        this.setState({editFormOpen:true});
    }
    closeForm(){
        this.setState({editFormOpen:false});
    }

    handleEditClick(){
        this.openForm();
    }
    handleFormCancel(){
        this.closeForm();
    }
    
    handleFormSubmit(attrs){
        this.props.onFormSubmit(attrs);
        this.closeForm();
    }
   
    render() {

        if (this.state.editFormOpen) {
            return (
                <TimerForm
                    id={this.props.id}
                    title={this.props.title}
                    project={this.props.project}
                    onFormSubmit={this.handleFormSubmit.bind(this)}
                    onFormCancel={this.handleFormCancel.bind(this)}
                    />
            );
        } else {
            return (
                <Timer
                    id={this.props.id}
                    title={this.props.title}
                    project={this.props.project}
                    elapsed={this.props.elapsed}
                    runningSince={this.props.runningSince}
                    onTrashClick={this.props.onTrashClick}
                    onEditClick={this.handleEditClick.bind(this)}
                    onStartClick={this.props.onStartClick}
                    onStopClick={this.props.onStopClick}
                    />
            );
        }
    }
}

export default EditableTimer;