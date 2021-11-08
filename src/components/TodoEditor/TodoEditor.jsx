// modules
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// styles
import styles from './TodoEditor.module.css';

// libs

// components
// import Input from '../Input';
import Button from '../Utils/Button';

const INILIAL_STATE = {
  noteMessage: '',
};

class TodoEditor extends Component {
  static propTypes = {
    onFormSubmit: PropTypes.func,
  };

  state = { ...INILIAL_STATE };

  handleChange = ({ target: { value } }) => {
    this.setState({ noteMessage: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { noteMessage } = this.state;
    const { onFormSubmit } = this.props;

    onFormSubmit(noteMessage);

    this.resetForm();
  };

  resetForm = () => {
    this.setState({ ...INILIAL_STATE });
  };

  render() {
    const { noteMessage } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className={styles.TodoEditor}>
        <textarea
          // rows="5"
          value={noteMessage}
          onChange={this.handleChange}
          className={styles.TodoEditorField}
        ></textarea>
        <Button
          type="submit"
          className={styles.TodoEditorButton}
          label="Save Todo"
        />
      </form>
    );
  }
}

export default TodoEditor;
