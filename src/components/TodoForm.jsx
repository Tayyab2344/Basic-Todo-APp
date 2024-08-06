import React, { useContext, useRef } from "react";
import { TodosContext } from "../store/context";

const TodoForm = () => {
  const valueRef = useRef();
  const { addTodo } = useContext(TodosContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: Date.now(),
      text: valueRef.current.value,
      isComplete: false,
    };
    addTodo(newTodo);
    console.log("New todo:", newTodo);
    valueRef.current.value = "";
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          className="w-96 p-3"
          ref={valueRef}
          type="text"
          placeholder="Enter Your Task"
        />
        <button className="text-white w-32 bg-orange-800 p-3" type="submit">
          Add Task
        </button>
      </form>
    </>
  );
};

export default TodoForm;
