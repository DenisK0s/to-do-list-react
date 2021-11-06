//модули
import PropTypes from 'prop-types';

//стили
import styles from './TodoStats.module.css';

const TodoStats = ({ allTodosQuant, completedTodosQuant }) => {
  return (
    <div className={styles.todoStats}>
      <p className={styles.TodoStatsField}>
        All todos:{' '}
        <span className={styles.TodoStatsNumer}>{allTodosQuant}</span>
      </p>
      <p className={styles.TodoStatsField}>
        Completed todos:{' '}
        <span className={styles.TodoStatsNumer}>{completedTodosQuant}</span>
      </p>
    </div>
  );
};

TodoStats.propTypes = {};

export default TodoStats;
