export const getTodos = (state) => state.todos.todos;
export const getTodoById = (state) => state.todos.todos.find((todo) => todo.id === state.todos.selectedTodoId);
