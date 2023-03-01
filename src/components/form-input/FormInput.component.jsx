import React from 'react';

import './FormInput.css';

export const FormInputComponent = ({ label, name, error, value, onChange }) => {

    const formInputClassName = error ? 'form-input form-input--error' : 'form-input';

    return (
        <div className={ formInputClassName }>
            <label htmlFor={ name }>{ label }:</label>
            <input type="text" name={ name } id={ name } value={ value } onChange={ onChange }/>
            { error && <p>This field is empty</p> }
        </div>
    );
};
