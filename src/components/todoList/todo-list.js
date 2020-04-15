import React from "react";
import TodoListItem from "../todoListItem/todo-list-item";

import './todo-list.css';

const TodoList = ({
                      todos,
                      onDeleted,
                      onChecked,
                      onEditItem,
                      EditItem,



                  }) => {


    const elements = todos.map((item) => {

        const {id, color,  ...itemProps} = item;

        return (

            <li key={id} className="list-item" style={{background: color}}>
                <TodoListItem {...itemProps}
                              onDeleted={() => onDeleted(id)}
                              onChecked={() => onChecked(id)}
                              onEditItem={() => onEditItem(id)}
                              EditItem={(label) => EditItem(label, id)}

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