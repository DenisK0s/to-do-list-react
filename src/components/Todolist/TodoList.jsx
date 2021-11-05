//модули
import React from 'react';

//стили
import styles from './TodoList.module.css';

//компоненты
import Button from '../Utils/Button';

const TodoList = ({ todos, onDeleteTodo }) => {
  return (
    <ul className={styles.TodoList}>
      {todos.map(({ id, text, completed }) => (
        <li key={id} className={styles.TodoList__item}>
          <p>{text}</p>
          {/* <button onClick={() => onDeleteTodo(id)}>delete</button> */}
          <Button />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
