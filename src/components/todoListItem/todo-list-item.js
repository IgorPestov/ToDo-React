import React, {Component} from "react";

import './todo-list-item.css';


export default class TodoListItem extends Component {
    state = {
        label: this.props.label,
        color: this.props.color,

    };
    onChange = (e) => {
        this.setState({
            label: e.target.value
        });


    };
    keyPress = (e) => {
        e.preventDefault();
            if(this.state.label !== '') {
            this.props.EditItem(this.state.label);
        }

    };

    onBlur = () => {

    };

    render() {
        let classNames = 'todo-list-item';
        let classNamesEdit = 'edit-item';
        let onFocus = false;
        const {
            label, onDeleted, onChecked, checked, onEditItem, color, edit
        } = this.props;
        


        if (checked) {
            classNames += ' done';
        }

        if (edit) {
            classNamesEdit += ' edit';
            classNames += ' edit';
        }


        return (
            <form onSubmit={this.keyPress}>
                <div className='todo-list-item'>
                    <p className='span-checkbox'>
                        <input  onClick={onChecked} className='checkbox active' type="checkbox"/>
                    </p>
                    <input type='text'
                           style={{background: color}}
                           className={classNamesEdit}
                           onChange={this.onChange}
                           value={this.state.label}
                           onBlur={this.onBlur}
                    />
                    <span  className={classNames} onDoubleClick={onEditItem}>
                    {label}
                </span>
                    <input type='button' value='Delete' className='button delete active' onClick={onDeleted}/>
                </div>
            </form>
        )
    }
}

