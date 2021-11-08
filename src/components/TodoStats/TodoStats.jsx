// modules
import PropTypes from 'prop-types';

//styles
import styles from './TodoStats.module.css';

const TodoStats = ({ allTodosQuant, completedTodosQuant }) => {
  return (
    <div className={styles.TodoStats}>
      <p className={styles.TodoStatsField}>
        All todos
        <span className={styles.TodoStatsNumer}>{allTodosQuant}</span>
      </p>
      <p className={styles.TodoStatsField}>
        Completed todos
        <span className={styles.TodoStatsNumer}>{completedTodosQuant}</span>
      </p>
    </div>
  );
};

TodoStats.propTypes = {
  allTodosQuant: PropTypes.number,
  completedTodosQuant: PropTypes.number,
};

export default TodoStats;
