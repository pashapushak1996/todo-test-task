import React from 'react';

import './TodoItem.css';

export const TodoItem = ({ id, title, description, status, onChange }) => {
    const handleChange = (e) => {
        e.stopPropagation();

        onChange(!status);
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
                <input type="checkbox" checked={ status } onChange={ handleChange }/>
            </div>
        </div>
    );
};
