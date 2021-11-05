// модули
import React, { Component } from 'react';

// компоненты
import TodoList from './components/TodoList';

// Данные
import initialTodos from '../src/todos.json';

export default class App extends Component {
  state = {
    todos: initialTodos,
  };

  handleDeleteTodo = id => {
    this.setState(({ todos }) => {
      const newTodosArr = todos.filter(todo => todo.id !== id);
      return { todos: newTodosArr };
    });
  };

  render() {
    const { todos } = this.state;
    return (
      <>
        <TodoList todos={todos} onDeleteTodo={this.handleDeleteTodo} />
      </>
    );
  }
}
