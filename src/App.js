// модули
import React, { Component } from 'react';

// компоненты
import TodoList from './components/TodoList';
import TodoEditor from './components/TodoEditor';
import Container from './components/Utils/Container';

// Данные
import initialTodos from '../src/todos.json';
import { Container } from '@mui/material';

class App extends Component {
  state = {
    todos: initialTodos,
  };

  // formSubmitHandler = data => {};

  onToggleCompleted = todoId => {
    this.setState(({ todos }) => ({
      todos: todos.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo,
      ),
    }));
  };

  handleDeleteTodo = id => {
    this.setState(({ todos }) => {
      const newTodosArr = todos.filter(todo => todo.id !== id);
      return { todos: newTodosArr };
    });
  };

  render() {
    const { todos } = this.state;

    const totalTodosCount = todos.length;
    const completedTodosCount = todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0,
    );

    return (
      <Container>
        <TodoList
          todos={todos}
          onDeleteTodo={this.handleDeleteTodo}
          onToggleCompleted={this.onToggleCompleted}
        />
        <TodoEditor onFormSubmit={this.formSubmitHandler} />
      </Container>
    );
  }
}

export default App;
