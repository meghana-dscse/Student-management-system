import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import '../styles/EditStudent.css';

function EditStudent() {
  const [student, setStudent] = useState({ name: '', email: '', age: '' });
  const { id } = useParams();
  const navigate = useNavigate();

  const fetchStudent = useCallback(async () => {
    try {
      const response = await axios.get(`https://student-backend-jt61.onrender.com/api/students/${id}`);
      setStudent(response.data);
    } catch (error) {
      console.error('Error fetching student:', error);
    }
  }, [id]);

  useEffect(() => {
    fetchStudent();
  }, [fetchStudent]);

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`https://student-backend-jt61.onrender.com/api/students/${id}`, student);
      navigate('/students');
    } catch (error) {
      console.error('Error updating student:', error);
    }
  };

  return (
    <div className="edit-student">
      <h2>Edit Student</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={student.name}
          onChange={handleChange}
          placeholder="Name"
          required
        />
        <input
          type="email"
          name="email"
          value={student.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <input
          type="number"
          name="age"
          value={student.age}
          onChange={handleChange}
          placeholder="Age"
          required
        />
        <button type="submit">Update Student</button>
      </form>
    </div>
  );
}

export default EditStudent;
