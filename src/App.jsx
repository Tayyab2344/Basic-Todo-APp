import React from "react";
import TodoForm from "./components/TodoForm";
import Heading from "./components/Heading";
import TodosProvider from "./store/context";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <TodosProvider>
      <div className="h-screen bg-blue-800 flex flex-col justify-center items-center">
        <Heading />
        <TodoForm />
        <TodoList />
      </div>
    </TodosProvider>
  );
};

export default App;
