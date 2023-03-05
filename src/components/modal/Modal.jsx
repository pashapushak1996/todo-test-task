import React from 'react';

import './Modal.css';

export const Modal = ({ onClickClose, children }) => {

    return (
        <div className='modal'>
            <div className="modal__content">
                { children }
            </div>
            <button className="modal__btn" onClick={ onClickClose }>Close</button>
        </div>
    );
};
