// модули
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// компоненты
// import Input from '../Input';
import Button from '../Button';

const INILIAL_STATE = {
  name: '',
  value: '',
};

class TodoEditor extends Component {
  static propTypes = {
    prop: PropTypes,
  };

  state = { ...INILIAL_STATE };

  handleChange = ({ target }) => {
    const { name, value, type, checked } = target;

    const correctValue = type === 'checkbox' ? checked : value;

    this.setState({ [name]: correctValue });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { onFormSubmit } = this.props;

    const { name, value } = this.state;

    console.log(name);
    console.log(value);

    this.resetForm();
  };

  resetForm = () => {
    this.setState({ ...INILIAL_STATE });
  };

  render() {
    const { value } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className={styles.TodoEditor}>
        <textarea value={value} onChange={this.handleChange}></textarea>
        <Button type="submit" className={styles.TodoEditorButton} />
      </form>
    );
  }
}

export default TodoEditor;
