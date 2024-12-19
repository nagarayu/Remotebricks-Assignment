import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from '../redux/actions/todoActions';

const TodoList = () => {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();
  const [editable, setEditable] = useState(null);
  const [editText, setEditText] = useState("");

  const handleEdit = (todo) => {
    setEditable(todo.id);
    setEditText(todo.text);
  };

  const handleSave = (id) => {
    dispatch(updateTodo(id, { text: editText }));
    setEditable(null);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {editable === todo.id ? (
              <input
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />
            ) : (
              <span>{todo.text}</span>
            )}
            <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
            {editable === todo.id ? (
              <button onClick={() => handleSave(todo.id)}>Save</button>
            ) : (
              <button onClick={() => handleEdit(todo)}>Edit</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;