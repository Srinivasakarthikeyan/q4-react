import React, {Component} from 'react';


class TodoTextInput extends Component {

    constructor(props) {
        super(props);
        this.state = {text:''};
    }

    handleSubmit(e) {
        const text = e.target.value.trim()
        if (e.which === 13) {
            this.props.onSave(text);
            e.target.value = '';
        }
    }

    render() {
        return (
            <input className="new-todo"
                       type="text"
                       onKeyDown={this.handleSubmit.bind(this)} />
        )
    }
}

export default TodoTextInput;