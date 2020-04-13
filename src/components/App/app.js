import React, {Component} from "react";

import TodoList from "../todo-list";

import ItemAddForm from "../item-add-form/item-add-form";


export default class App extends Component {

    maxId = 0;
    state = {
        todoData: []
    };

    createTodoItem(label,color) {
        return {
            label, color,
            id: this.maxId++,
            checked: false,
            edit: false,


        }
    }

    addItem = (text, color) => {
        const newItem = this.createTodoItem(text, color);

        this.setState(({todoData}) => {
            const newArr = [
                ...todoData,
                newItem
            ];
            return {
                todoData: newArr
            };
        });

    };

    onEditItem = (id) => {

    };

    deleteItem = (id) => {
        this.setState(({todoData}) => {
            const idx = todoData.findIndex((el) => el.id === id);

            const newArray = [
                ...todoData.slice(0, idx),
                ...todoData.slice(idx + 1)
            ];
            return {
                todoData: newArray
            };
        });
    };
    onChecked = (id) => {
        this.setState(({todoData}) => {
            const idx = todoData.findIndex((el) => el.id === id);

            const oldItem = todoData[idx];
            const newItem = {...oldItem, checked: !oldItem.checked};
            const newArray = [
                ...todoData.slice(0, idx),
                newItem,
                ...todoData.slice(idx + 1)
            ];

            return {

                todoData: newArray
            };


        });

    };
    onRadioBtn = () => {
     // console.log('work')
        console.log(this.state.todoData);
        console.log(this.state.color)
    };

    render() {
        // const checkedItem = this.state.todoData.filter((el) => el.checked).length;
        // console.log(checkedItem);

        return (

            <div className="todo-app">
                <TodoList todos={this.state.todoData}
                          onDeleted={this.deleteItem}
                          onChecked={this.onChecked}
                          onEditItem={this.onEditItem}
                />
                <ItemAddForm onItemAdded={this.addItem}
                             radioBtn={this.onRadioBtn}
                />
            </div>
        )
    }

}
