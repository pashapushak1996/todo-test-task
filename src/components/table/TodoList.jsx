import React from 'react';

import './TodoList.css';
import { TodoItem } from "../todo-item/TodoItem.jsx";

export const TodoList = ({ items, changeStatus }) => {
    const listItems = items.map((todo) => {

        const handleStatusChange = (newStatus) => {
            changeStatus(todo.id, newStatus);
        };

        return <TodoItem { ...todo } onChange={ handleStatusChange }/>
    });

    return (
        <div className='todo-list'>
            <div className="todo-list__header">
                <span className="todo-list__header-column">ID</span>
                <span className="todo-list__header-column">TITLE</span>
                <span className="todo-list__header-column">DESCRIPTION</span>
                <span className="todo-list__header-column">STATUS</span>
            </div>
            <div className="todo-list__items">
                { listItems }
            </div>
        </div>
    );
};
