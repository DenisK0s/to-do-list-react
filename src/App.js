// modules
import React, { Component } from 'react';

// libs
import shortid from 'shortid';

// components
import AppBar from './components/AppBar';
import Container from './components/Utils/Container';
import TodoList from './components/TodoList';
import TodoEditor from './components/TodoEditor';
import TodoStats from './components/TodoStats';
import TodoFilter from './components/TodoFilter';

// Data
import initialTodos from '../src/todos.json';

class App extends Component {
  state = {
    todos: initialTodos,
    filter: '',
  };

  addTodo = text => {
    const newTodo = {
      id: shortid.generate(),
      text,
      completed: false,
    };

    this.setState(({ todos }) => ({ todos: [newTodo, ...todos] }));
  };

  changeFilter = ({ target: { value } }) => {
    this.setState({ filter: value });
  };

  getFiltredTodos = () => {
    const { todos, filter } = this.state;

    const optimizedFilter = filter.toLowerCase();

    return todos.filter(todo =>
      todo.text.toLowerCase().includes(optimizedFilter),
    );
  };

  getCompletedTodosQuantity = () => {
    const { todos } = this.state;
    return todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0,
    );
  };

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
    const { todos, filter } = this.state;

    const totalTodosCount = todos.length;
    const completedTodosCount = this.getCompletedTodosQuantity();
    const filtredTodos = this.getFiltredTodos();

    return (
      <>
        <AppBar />
        <Container>
          <TodoFilter filterText={filter} filterHandler={this.changeFilter} />
          <TodoStats
            allTodosQuant={totalTodosCount}
            completedTodosQuant={completedTodosCount}
          />
          <TodoEditor onFormSubmit={this.addTodo} />
          <TodoList
            todos={filtredTodos}
            onDeleteTodo={this.handleDeleteTodo}
            onToggleCompleted={this.onToggleCompleted}
          />
        </Container>
      </>
    );
  }
}

export default App;
