import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { FormComponent } from "./components/form/Form.component.jsx";
import { TodoListComponent } from "./components/todo-list/TodoList.component.jsx";
import { Modal } from "./components/modal/Modal.jsx";
import { changeTodoStatus, getTodos } from "./features/todoSlice.js";

function App() {
    const todos = useSelector(getTodos);
    const dispatch = useDispatch();

    const [showModal, setShowModal] = useState(false);

    const toggleModalVisibility = () => {
        setShowModal(prev => !prev)
    };

    const onTodoStatusChange = (todoId) => {
        dispatch(changeTodoStatus(todoId));
    }

    const handleClickTodo = (e) => {
        if (e.target.type === 'checkbox') {
            const todoId = e.target.dataset.todoId;

            onTodoStatusChange(todoId);

            return;
        }

        toggleModalVisibility();
    }

    return (<>
            <FormComponent/>
            <TodoListComponent
                todos={ todos }
                handleClickTodo={ handleClickTodo }
            />
            { showModal && <Modal/> }
        </>);
};

export default App
