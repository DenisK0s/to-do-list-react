// modules
import PropTypes from 'prop-types';

//styles
import styles from './Input.module.css';

//libs
import classNames from 'classnames';

const Input = ({
  type = 'text',
  inputLabel,
  value,
  onInputChange,
  pattern,
  title,
  name,
  checked,
  inputExtClassName,
  labelExtClassName,
}) => {
  return (
    <label className={classNames(styles.InputLabel, labelExtClassName)}>
      {inputLabel}
      <input
        type={type}
        className={classNames(styles.Input, inputExtClassName)}
        name={name}
        value={value}
        checked={checked}
        pattern={pattern}
        onChange={onInputChange}
        title={title}
      />
    </label>
  );
};

Input.propTypes = {
  inputLabel: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  pattern: PropTypes.string,
  title: PropTypes.string,
  value: PropTypes.string,
  onInputChange: PropTypes.func,
};

export default Input;
