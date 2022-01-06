import React from 'react';
import './style.css';
import TodoList from './containers/toDoList';

export default function App() {
  return (
    <div>
      <h1>Todo List </h1>
      <TodoList />
    </div>
  );
}
