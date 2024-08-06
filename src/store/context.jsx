import React, { useReducer, createContext, useEffect } from "react";

export const TodosContext = createContext({
  todos: [],
  addTodo: () => {},
  deleteTodo: () => {},
  editTodo: () => {},
  toggleTodo: () => {},
});

const initialState = JSON.parse(localStorage.getItem("todos")) || [];

const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload];
    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.payload);
    case "EDIT_TODO":
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, text: action.payload.text }
          : todo
      );
    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, isComplete: !todo.isComplete }
          : todo
      );
    default:
      return state;
  }
};

const TodosProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(todoReducer, initialState);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
    dispatch({ type: "ADD_TODO", payload: todo });
  };

  const deleteTodo = (id) => {
    dispatch({ type: "DELETE_TODO", payload: id });
  };

  const editTodo = (id, text) => {
    dispatch({ type: "EDIT_TODO", payload: { id, text } });
  };

  const toggleTodo = (id) => {
    dispatch({ type: "TOGGLE_TODO", payload: id });
  };

  return (
    <TodosContext.Provider
      value={{ todos, addTodo, deleteTodo, editTodo, toggleTodo }}
    >
      {children}
    </TodosContext.Provider>
  );
};

export default TodosProvider;
