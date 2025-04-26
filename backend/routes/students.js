const express = require('express');
const router = express.Router();
const { getAllStudents, createStudent, getStudentById, updateStudent, deleteStudent } = require('../controllers/studentController');

// Route to get all students
router.get('/', getAllStudents);

// Route to add a new student
router.post('/', createStudent);

// Route to get a student by ID
router.get('/:id', getStudentById);

// Route to update a student's details by ID
router.put('/:id', updateStudent);

// Route to delete a student by ID
router.delete('/:id', deleteStudent);

module.exports = router;
