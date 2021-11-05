// модули
import PropTypes from 'prop-types';

//стили
import styles from './Button.module.css';

//либы
import classnames from 'classnames';

const Button = ({
  type = 'button',
  label,
  className,
  callback,
  callbackArgs,
}) => {
  const combinedClassName = classnames(styles.button, className);

  return callback ? (
    <button
      type={type}
      className={combinedClassName}
      onClick={callbackArgs ? () => callback(callbackArgs) : callback}
    >
      {label}
    </button>
  ) : (
    <button type={type} className={combinedClassName}>
      {label}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
  className: PropTypes.string,
  cbArgs: PropTypes.any,
  cbOnClick: PropTypes.func,
};

export default Button;
