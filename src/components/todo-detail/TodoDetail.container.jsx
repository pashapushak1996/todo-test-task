import React from 'react';
import { useSelector } from "react-redux";

import { getTodoById } from "../../redux/todos/selectors";
import { TodoDetail } from "./TodoDetail.component.jsx";

export const TodoDetailContainer = ({ onChangeStatus }) => {
    const selectedItem = useSelector(getTodoById);

    const handleStatusChange = (status) => {
        onChangeStatus(selectedItem.id, status)
    };

    return selectedItem && <TodoDetail { ...selectedItem } onChange={ handleStatusChange }/>
};
