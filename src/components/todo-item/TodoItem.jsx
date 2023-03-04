import React from 'react';

import './TodoItem.css';

export const TodoItem = ({ id, title, description, completed, onChange }) => {
    const handleChange = (e) => {
        e.stopPropagation();

        onChange(!completed);
    };


    return (
        <div className='todo-item'>
            <div className="todo-item__column">
                <p className='todo-item__text'>{ id }</p>
            </div>
            <div className="todo-item__column">
                <p className='todo-item__text'>{ title }</p>
            </div>
            <div className="todo-item__column">
                <p className='todo-item__text'>{ description }</p>
            </div>
            <div className="todo-item__column">
                <input type="checkbox" checked={ completed } onChange={ handleChange }/>
            </div>
        </div>
    );
};
