import React from 'react';

const TodoList = ({ todos }) => (
  <ul>
    {todos.map(({ id, text }) => (
      <li key={id}>{text}</li>
    ))}
  </ul>
);

export default TodoList;
