//modules
import PropTypes from 'prop-types';

//components
import Button from '../Utils/Button';
import Input from '../Input';

//styles
import styles from './TodoList.module.css';

//libs
import classNames from 'classnames/bind';

const сlassesComposition = classNames.bind(styles);

const TodoList = ({ todos, onDeleteTodo, onToggleCompleted }) => {
  return (
    <ul className={styles.TodoList}>
      {todos.map(({ id, text, completed }) => (
        <li
          key={id}
          className={сlassesComposition('TodoListItem', {
            TodoListItemCompleted: completed,
          })}
        >
          <Input
            type="checkbox"
            checked={completed}
            onInputChange={() => onToggleCompleted(id)}
          />
          <p>{text}</p>
          <Button
            callback={onDeleteTodo}
            callbackArgs={id}
            className={styles.DelTodoButton}
            label="Del"
          />
        </li>
      ))}
    </ul>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array,
  onDeleteTodo: PropTypes.func,
  onToggleCompleted: PropTypes.func,
};

export default TodoList;
