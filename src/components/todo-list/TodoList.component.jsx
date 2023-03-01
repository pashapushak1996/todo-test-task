import React from 'react';
import { TodoItemComponent } from "../todo-item/TodoItem.component.jsx";

import './TodoList.css';

export const TodoListComponent = ({ todos, handleClickTodo }) => {
    const todosItems = todos.map((item) => {
        return <TodoItemComponent key={ item.id }
                                  handleClickTodo={ handleClickTodo(item.id) }
                                  { ...item }
        />
    });

    return (
        <div className='todo-list'>
            <div className="todo-list__header">
                <span>ID</span>
                <span>TITLE</span>
                <span>DESCRIPTION</span>
                <span>STATUS</span>
            </div>
            <div className="todo-list__items">
                { todosItems }
            </div>
        </div>
    );
};

