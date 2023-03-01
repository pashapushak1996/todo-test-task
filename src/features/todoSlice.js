import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: [],
    selectedTodo: null
}


export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload)
        },
        changeTodoStatus: (state, action) => {
            state.todos.forEach((todo) => {
                if (todo.id === action.payload) {
                    todo.status = !todo.status;
                }
            });
        }
    }
});

export const getTodos = (state) => state.todos.todos;

export const { addTodo, changeTodoStatus } = todoSlice.actions;

export default todoSlice.reducer;
