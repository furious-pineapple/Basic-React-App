import React from 'react';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Let's start breaking things</h1>
      </header>
      <TodoList />
    </div>
  );
}

export default App;
