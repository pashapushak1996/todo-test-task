import React from 'react';

import './Modal.css';

export const Modal = ({ title, description, status, onChangeStatus, toggleVisibility }) => {
    return (
        <div className='modal'>
            <h2 className='modal__title'>{ title }</h2>
            <h4 className='modal__subtitle'>Description:</h4>
            <p className='modal__description'>{ description }</p>
            <div className="modal__status">
                <span>Status:</span>
                <input type="checkbox" value={ status } onChange={ onChangeStatus }/>
            </div>

            <button onClick={ toggleVisibility }>Close</button>
        </div>
    );
};
