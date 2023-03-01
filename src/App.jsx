import { useState } from "react";

import { FormComponent } from "./components/form/Form.component.jsx";
import { TodoListComponent } from "./components/todo-list/TodoList.component.jsx";
import { Modal } from "./components/modal/Modal.jsx";

function App() {
    const [todos, setTodos] = useState([]);
    const [selectedTodo, setSelectedTodo] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const toggleModalVisibility = () => {
        setShowModal(prev => !prev);
    };

    const selectTodo = (todoId) => {
        const todo = todos.find(todo => todo.id === todoId);


        setSelectedTodo(todo);
    };

    const onTodoStatusChange = (todoId) => {
        const changedTodos = todos.map((todo) => {
            if (todo.id === todoId) {
                todo.status = !todo.status;
            }

            return todo;
        });

        setTodos(changedTodos);
    };

    const handleClickTodo = (todoId) => (e) => {
        if (e.target.type === 'checkbox') {
            onTodoStatusChange(todoId);

            return;
        }

        selectTodo(todoId);

        toggleModalVisibility();
    }

    const addTodo = (newTodo) => {
        setTodos(prevTodos => [...prevTodos, newTodo]);
    }

    return (<div className='app'>
        <FormComponent addTodo={ addTodo }/>
        <TodoListComponent
            todos={ todos }
            handleClickTodo={ handleClickTodo }
        />
        { showModal && <Modal { ...selectedTodo }
                              toggleVisibility={ toggleModalVisibility }
                              onChangeStatus={ () => onTodoStatusChange(selectedTodo.id) }/> }
        { showModal && <div className="overlay"></div> }
    </div>);
};

export default App
