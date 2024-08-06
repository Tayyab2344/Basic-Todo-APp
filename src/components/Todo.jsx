import React, { useContext, useState } from "react";
import { TodosContext } from "../store/context";

const Todo = ({ todo }) => {
  const { deleteTodo, toggleTodo, editTodo } = useContext(TodosContext);
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleDelete = () => {
    deleteTodo(todo.id);
    
  };

  const handleToggle = () => {
    toggleTodo(todo.id);
  };

  const handleEdit = () => {
    if (isEditing) {
      editTodo(todo.id, newText);
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className="flex items-center justify-between p-3 border-b border-gray-300 bg-white w-[520px] mt-3 rounded">
      {isEditing ? (
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          className="w-64 p-2 text-black text-2xl bg-white border border-gray-600 rounded"
        />
      ) : (
        <span
          className={`flex-1 text-2xl ${todo.isComplete ? "line-through" : ""}`}
          onClick={handleToggle}
        >
          {todo.text}
        </span>
      )}
      <button
        onClick={handleEdit}
        className="px-3 py-2 ml-2 text-white bg-blue-500 rounded"
      >
        {isEditing ? "Save" : "Edit"}
      </button>
      <button
        onClick={handleDelete}
        className="px-3 py-2 ml-2 text-white bg-red-500 rounded"
      >
        Delete
      </button>
    </div>
  );
};

export default Todo;
