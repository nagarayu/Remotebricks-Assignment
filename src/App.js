import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TodoList from './components/TodoList';
import EmployeeList from './components/EmployeeList';
import AddTodo from './components/AddTodo';

const App = () => {
  return (
    <Router>
      <div>
        <AddTodo />
        <Routes>
          <Route path="/" element={<TodoList />} />
          <Route path="/employees" element={<EmployeeList />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;