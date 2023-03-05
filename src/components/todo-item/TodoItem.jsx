import React from 'react';

import './TodoItem.css';

export const TodoItem = ({ id, title, description, status, onChange, onClick }) => {
    const handleChange = (e) => {
        e.stopPropagation();

        onChange(!status);
    };

    const cancelPropagation = (e) => {
        e.stopPropagation();
    }


    return (
        <div className='todo-item' onClick={ onClick }>
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
                <input type="checkbox"
                       checked={ status }
                       onClick={ cancelPropagation }
                       onChange={ handleChange }/>
            </div>
        </div>
    );
};
