import React, { useState } from 'react';

import { FormInputComponent } from "../form-input/FormInput.component.jsx";
import './Form.css';

export const FormComponent = ({ addTodo }) => {
    const [todoFields, setTodoFields] = useState({ title: '', description: '' });
    const [error, setError] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setTodoFields(prevFormFields => ({ ...prevFormFields, [name]: value }));
    }

    const isInputEmpty = (inputValue) => !inputValue.trim();

    const handleSubmit = (e) => {
        e.preventDefault();

        const areEmpty = Object.values(todoFields).some(field => isInputEmpty(field));

        if (areEmpty) {
            setError(true);

            return;
        }

        const newTodo = {
            ...todoFields,
            id: Date.now().toString(),
            status: false
        };

        addTodo(newTodo);

        setTodoFields({ title: '', description: '' });
    }

    return (
        <form className='form' onSubmit={ handleSubmit }>
            <div className="form__input">
                <FormInputComponent label='Title'
                                    name='title'
                                    value={ todoFields.title }
                                    onChange={ handleInputChange }
                                    error={ error && isInputEmpty(todoFields.title) }/>
            </div>
            <div className="form__input">
                <FormInputComponent label='Description'
                                    name='description'
                                    value={ todoFields.description }
                                    onChange={ handleInputChange }
                                    error={ error && isInputEmpty(todoFields.description) }/>
            </div>
            <button type='submit'>Create</button>
        </form>
    );
};
