import React from 'react';

import { Form } from "./components/form/Form.jsx";
import { TodoList } from "./components/todo-list/TodoList.jsx";

import './App.css';

const App = () => {


    return (
        <div className='app'>
            <div className="app__form">
                <Form/>
            </div>
            <div className="app__list">
                <TodoList items={ [] }/>
            </div>
        </div>
    );
};

export default App;
