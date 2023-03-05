import React from 'react';

import './TodoDetail.css';

export const TodoDetail = ({ title, description, status, onChange }) => {
    const handleStatusChange = () => {
        onChange(!status);
    }

    return (
        <div className='todo-detail'>
            <h2 className="todo-detail__title">{ title }</h2>
            <strong className="todo-detail__subtitle">Description:</strong>
            <p className="todo-detail__description">{ description }</p>
            <input type="checkbox" checked={ status } onChange={ handleStatusChange }/>
        </div>
    );
};
