import React, { Component } from 'react';

import AddTodo from './AddTodo';

class App extends Component {
  render() {
    return (
      <div>
        Todo List :) Using Redux !
        <AddTodo/>
      </div>
    );
  }
}

export default App;
