import React, { useState } from 'react';

import { TodoItem } from "./components/todo-item/TodoItem.jsx";

const App = () => {
    const [item, setItem] = useState({
        id: 2,
        description: 'asdsad',
        title: 'dasdsad',
        status: true
    });


    return (
        <div>
            <TodoItem id={ item.id }
                      description={ item.description }
                      title={ item.title }
                      status={ item.status } onChange={ (newStatus) => {
                setItem({ ...item, status: newStatus });
            } }/>
        </div>
    );
};

export default App;
