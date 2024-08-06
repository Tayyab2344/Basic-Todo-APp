import React, { useContext } from 'react';
import { TodosContext } from '../store/context';
import Todo from './Todo';

const TodoList = () => {
  const { todos } = useContext(TodosContext);

  console.log("Todos in TodoList:", todos);

  return (
    <div className="mt-4">
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
