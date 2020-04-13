import React, {Component} from "react";

import './todo-list-item.css';

export default class TodoListItem extends Component {
    state = {
        label : this.props.label,
        color: this.props.color

    };

    render() {
        let classNames = 'todo-list-item';
        let classNamesEdit = 'edit-item';
        const {
            label, onDeleted, onChecked, checked, onEditItem, color
        } = this.props;


        if (checked) {
            classNames += ' done';
        }


        return (
            <div className='todo-list-item'>
                <input onClick={onChecked} type="checkbox"/>
                <input type='text'  className={classNamesEdit}

                />
                <span style={{background: color}} className={classNames} onDoubleClick={onEditItem}>
                    {label}
                </span>
                <button onClick={onDeleted}>Delete</button>
            </div>

        )
    }
}

