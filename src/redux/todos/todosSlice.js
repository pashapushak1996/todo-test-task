import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: [],
    selectedTodoId: null
}

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const createdTodo = {
                ...action.payload,
                id: Date.now().toString(),
                status: false
            };

            state.todos.push(createdTodo);
        },
        changeTodoStatus: (state, action) => {
            const { todoId, status } = action.payload;

            state.todos.forEach((todo) => {
                if (todo.id === todoId) {
                    todo.status = status;
                }
            })
        },
        setSelectedTodoId: (state, action) => {
            state.selectedTodoId = action.payload;
        }
    }
});

export const getTodos = (state) => state.todos.todos;
export const getTodoById = (state) => state.todos.todos.find((todo) => todo.id === state.todos.selectedTodoId);

export const { addTodo, changeTodoStatus, setSelectedTodoId } = todosSlice.actions;

export default todosSlice.reducer;
