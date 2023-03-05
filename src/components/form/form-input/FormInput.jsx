import React from 'react';

import './FormInput.css';


export const FormInput = ({ label, name, value, placeholder, onChange, error }) => {
    const className = error ? 'input input--is-error' : 'input';

    return (
        <div className={ className }>
            <label className='input__label' htmlFor={ name }>{ label }:</label>
            <input type="text" name={ name } value={ value } onChange={ onChange } placeholder={ placeholder }/>
            { error && <div className={ 'input__error-text' }>{ error }</div> }
        </div>
    );
};
