import React, { useState } from 'react';

import { Form } from "./components/form/Form.jsx";
import { TodoList } from "./components/todo-list/TodoList.jsx";

import './App.css';

import { Modal } from "./components/modal/Modal.jsx";

const App = () => {
    const [isModalOpen, setIsModalOpen] = useState(true);

    const toggleModalVisibility = () => {
        setIsModalOpen(!isModalOpen);
    };

    const modalClassName = isModalOpen
        ? 'app__modal app__modal--is-visible'
        : 'app__modal'

    const overlayClassName = isModalOpen
        ? 'app__overlay app__overlay--is-visible'
        : 'app__overlay'

    return (
        <div className='app'>
            <button onClick={ toggleModalVisibility }>asdsad</button>
            <div className="app__form">
                <Form/>
            </div>
            <div className="app__list">
                <TodoList items={ [] }/>
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
