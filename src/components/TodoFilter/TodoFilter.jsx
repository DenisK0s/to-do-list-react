//modules
import PropTypes from 'prop-types';

// styles
import styles from './TodoFilter.module.css';

//components
import Input from '../Input';

const TodoFilter = ({ filterText, filterHandler }) => {
  return (
    <div className={styles.TodoFilter}>
      <Input
        inputLabel="Todo Filter"
        value={filterText}
        onInputChange={filterHandler}
      />
    </div>
  );
};

TodoFilter.propTypes = {
  filterText: PropTypes.string,
};

export default TodoFilter;
