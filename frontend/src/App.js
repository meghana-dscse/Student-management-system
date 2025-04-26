import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import StudentList from './components/StudentList';
import AddStudent from './components/AddStudent';
import EditStudent from './components/EditStudent';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <h1>🎓 Student Management System</h1>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/students">Students</Link>
          <Link to="/add-student">Add Student</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/students" element={<StudentList />} />
        <Route path="/add-student" element={<AddStudent />} />
        <Route path="/edit-student/:id" element={<EditStudent />} />
      </Routes>
    </div>
  );
}

export default App;
