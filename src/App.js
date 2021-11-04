// модули
import React, { Component } from 'react';

// компоненты
import TodoList from './components/Todolist';

export default class App extends Component {
  state = {
    todos: [
      { id: 'id-1', text: 'Clean up at home', completed: false },
      { id: 'id-2', text: 'Buy some food', completed: true },
      { id: 'id-3', text: 'Get reed of the old TV', completed: false },
      { id: 'id-4', text: 'Call to wife', completed: true },
      { id: 'id-5', text: 'Go to the Gym', completed: false },
    ],
  };

  render() {
    const { todos } = this.state;
    return (
      <>
        <TodoList todos={todos} />
      </>
    );
  }
}
