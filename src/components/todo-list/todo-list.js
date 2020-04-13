import React from "react";
import TodoListItem from "../todo-list-item/todo-list-item";

import './todo-list.css';

const TodoList = ({
                      todos,
                      onDeleted,
                      onChecked,
                      onEditItem
                  }) => {


    const elements = todos.map((item) => {

        const {id, ...itemProps} = item;

        return (
            <li key={id} className="list-item">
                <TodoListItem {...itemProps}
                              onDeleted={() => onDeleted(id)}
                              onChecked={() => onChecked(id)}
                              onEditItem={() => onEditItem(id)}
                />
            </li>)

    });

    return (
        <ul className="list">
            {elements}
        </ul>
    )
};
export default TodoList;