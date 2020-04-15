import React, {Component} from "react";

import TodoList from "../todoList";

import ItemAddForm from "../itemAddForm/item-add-form";


export default class App extends Component {

    maxId = 0;
    state = {
        todoData: []
    };

    createTodoItem(label, color) {
        return {
            label,
            color,
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

    toggleProperly = (arr, id, propName) => {
        const idx = arr.findIndex((el) => el.id === id);
        const oldItem = arr[idx];
        const newItem = {...oldItem, [propName]: !oldItem[propName]};

        return [
            ...arr.slice(0, idx),
            newItem,
            ...arr.slice(idx + 1)
        ];


    };

    onEditItem = (id) => {
        this.setState(({todoData}) => {

            return {
                todoData: this.toggleProperly(todoData, id, 'edit')
            };
        });

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

            return {

                todoData: this.toggleProperly(todoData, id, 'checked')
            };

        });

    };

    onRadioBtn = () => {
         console.log(this.state.todoData)
    };

    EditItem = (text, id) => {
        this.setState(({todoData}) => {const idx = todoData.findIndex((el) => el.id === id);
            const oldItem = todoData[idx];
            const newItem = {...oldItem, label: text, edit: !oldItem.edit};
            const newArray =[
                ...todoData.slice(0, idx),
                newItem,
                ...todoData.slice(idx + 1)
            ];
            return {
                todoData: newArray
            };
        });

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
                          EditItem = {this.EditItem}

                />
                <ItemAddForm onItemAdded={this.addItem}
                             radioBtn={this.onRadioBtn}
                />
            </div>
        )
    }

}
