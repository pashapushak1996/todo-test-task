import React, { useState } from 'react';

import todos from './db';
import { TodoList } from "./components/table/TodoList.jsx";

const App = () => {
    const [items, setItems] = useState();


    return (
        <TodoList items={ todos }/>
    );
};

export default App;
