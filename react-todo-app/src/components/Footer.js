import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <span className="todo-count">
                    <strong>0 items left</strong>
                </span>
                <ul className="filters">
                    <li><a className="selected" style={{ cursor: 'pointer' }}>All</a></li>
                    <li><a className="" style={{ cursor: 'pointer' }}>Active</a></li>
                    <li><a className="" style={{ cursor: 'pointer' }}>Completed</a></li>
                </ul>
                <button className="clear-completed">
                    Clear completed
                </button>
            </footer>
        );
    }
}

export default Footer;