//модули
import React from 'react';

//стили
import styles from './TodoList.module.css';

//либы
import classNames from 'classnames/bind';
const сlassesComposition = classNames.bind(styles);

//компоненты
import Button from '../Utils/Button';
import Input from '../Input';

const TodoList = ({ todos, onDeleteTodo, onToggleCompleted }) => {
  return (
    <ul className={styles.TodoList}>
      {todos.map(({ id, text, completed }) => (
        <li
          key={id}
          className={сlassesComposition(TodoListItem, {
            TodoListItemCompleted: completed,
          })}
        >
          <Input
            type="checkbox"
            checked={completed}
            onInputChange={() => onToggleCompleted(id)}
          />
          <p>{text}</p>
          <Button callback={onDeleteTodo} callbackArgs={id} />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
