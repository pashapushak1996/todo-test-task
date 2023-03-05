import React, { useState } from 'react';

import { Form } from "./components/form/Form.jsx";
import { TodoList } from "./components/todo-list/TodoList.jsx";

import './App.css';

import { Modal } from "./components/modal/Modal.jsx";
import { useDispatch, useSelector } from "react-redux";
import { changeTodoStatus, getTodos, setSelectedTodoId } from "./redux/todos/todosSlice.js";

const App = () => {
    const dispatch = useDispatch();

    const todos = useSelector(getTodos);


    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModalVisibility = () => {
        setIsModalOpen(!isModalOpen);
    };

    const onTodoClick = (todoId) => {
        dispatch(setSelectedTodoId(todoId));
    }

    const changeTodoItemStatus = (todoId, status) => {
        dispatch(changeTodoStatus({ todoId, status }));
    }

    const modalClassName = isModalOpen
        ? 'app__modal app__modal--is-visible'
        : 'app__modal'

    const overlayClassName = isModalOpen
        ? 'app__overlay app__overlay--is-visible'
        : 'app__overlay'

    return (
        <div className='app'>
            <div className="app__form">
                <Form/>
            </div>
            <div className="app__list">
                <TodoList items={ todos } onItemClick={ onTodoClick } changeStatus={ changeTodoItemStatus }/>
            </div>
            <div className={ modalClassName }>
                <Modal onClickClose={ toggleModalVisibility }>
                    <h1>Hello</h1>
                </Modal>
            </div>
            <div className={ overlayClassName }></div>
        </div>
    );
};

export default App;
