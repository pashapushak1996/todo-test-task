import React, { useState } from 'react';
import { useDispatch } from "react-redux";

import { addTodo } from "../../redux/todos/todosSlice.js";

import { FormInput } from "./form-input/FormInput.jsx";
import { isFieldEmpty } from '../../utils/form-validators';
import FormErrors from "../../constants/FormErrors.enum.js";

import './Form.css';


export const Form = () => {
    const dispatch = useDispatch();

    const [todo, setTodo] = useState({
        title: '',
        description: ''
    });

    const [error, setError] = useState(null);

    const handleInputChange = (e) => {
        const { value, name } = e.target;

        setTodo((prevTodo) => ({ ...prevTodo, [name]: value }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const areFieldsEmpty = Object.values(todo).some((field) => isFieldEmpty(field));

        if (areFieldsEmpty) {
            setError(FormErrors.IS_EMPTY);

            return;
        }

        dispatch(addTodo(todo));

        setTodo({
            title: '',
            description: ''
        });

        setError(null);
    }

    const isTitleEmpty = error && isFieldEmpty(todo.title) ? error : null;
    const isDescriptionEmpty = error && isFieldEmpty(todo.description) ? error : null;

    return (
        <form className='form' onSubmit={ handleSubmit }>
            <div className="form__input">
                <FormInput label={ 'Title' }
                           name={ 'title' }
                           placeholder={ 'Enter a title' }
                           value={ todo.title }
                           error={ isTitleEmpty }
                           onChange={ handleInputChange }/>
            </div>
            <div className="form__input">
                <FormInput label={ 'Description' }
                           name={ 'description' }
                           placeholder={ 'Enter a description' }
                           value={ todo.description }
                           error={ isDescriptionEmpty }
                           onChange={ handleInputChange }/>
            </div>
            <button className="form__button"
                    type='submit'>
                Create
            </button>
        </form>
    );
};
