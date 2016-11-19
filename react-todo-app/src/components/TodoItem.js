import React, {Component,PropTypes} from 'react';

class TodoItem extends Component {

    handleChange() {
        
    }

    render() {
        let {todo} = this.props;
        return (
            <li>
                <div className="view">
                    <input className="toggle"
                           onChange={this.handleChange}
                           type="checkbox"
                           checked={todo.completed} />
                    <label>{todo.text}</label>
                    <button className="destroy"/>
                </div>
            </li>    
        );
    }
}


TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

export default TodoItem;