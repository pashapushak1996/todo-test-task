import React from 'react';

export const Modal = ({ title, description, status, onChangeStatus }) => {
    return (
        <div className='modal'>
            <h2>{ title }</h2>
            <h4>Description:</h4>
            <p>{ description }</p>

            <div className="modal__status">
                <span>Status:</span>
                <input type="checkbox" value={ status } onChange={ onChangeStatus }/>
            </div>
        </div>
    );
};
