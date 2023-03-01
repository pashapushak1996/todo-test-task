import React from 'react';

import './TodoItem.css';

export const TodoItemComponent = ({ id, title, description, status, handleClickTodo }) => {
    return (
        <div className='todo-item' onClick={ handleClickTodo }>
            <span className='todo-item__id'>{ id }</span>
            <p className='todo-item__title'>{ title }</p>
            <p className='todo-item__description'>{ description }</p>
            <input type="checkbox"
                   checked={ status }
                   onChange={ handleClickTodo }
            />
        </div>
    );
};
