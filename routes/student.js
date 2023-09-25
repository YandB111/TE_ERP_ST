const express = require('express');
const router = express.Router();
const Student = require('../models/student');
const bodyParser = require('body-parser');

/**
 * @swagger
 * /api/student/create:
 *   post:
 *     tags:
 *       - Students
 *     description: Create a new student
 *     parameters:
 *       - name: studentData
 *         in: body
 *         description: Student data to be added
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             STUDENT_NAME:
 *               type: string
 *             GENDER:
 *               type: string
 *             DOB:
 *               type: string
 *             SCHOOL_NAME:
 *               type: string
 *             SCHOOL_CODE:
 *               type: string
 *             GRADE_SECTION:
 *               type: string
 *             ENROLLMENT_DATE:
 *               type: string
 *             ADMITTANCE_TYPE:
 *               type: string
 *             FATHER_NAME:
 *               type: string
 *             FATHER_CONTACT:
 *               type: string
 *             FATHER_EMAIL:
 *               type: string
 *             MOTHER_NAME:
 *               type: string
 *             MOTHER_CONTACT:
 *               type: string
 *             MOTHER_EMAIL:
 *               type: string
 *     responses:
 *       200:
 *         description: Successfully created the student
 */
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

// Create a route for creating a student
router.post('/create', async (req, res) => {
  try {
    const studentData = req.body;

    // Create a new student instance using the Mongoose model
    const student = new Student(studentData);

    // Save the student to the database
    await student.save();

    res.json(student);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

/**
 * @swagger
 * /api/student/get/{id}:
 *   get:
 *     tags:
 *       - Students
 *     description: Get a student by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the student to retrieve
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Successfully retrieved the student
 *       404:
 *         description: Student not found
 */
router.get('/get/:id', async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }
    res.json(student);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// Get a student by student code
/**
 * @swagger
 * /api/student/getByCode/{code}:
 *   get:
 *     tags:
 *       - Students
 *     description: Get a student by SCHOOL_CODE
 *     parameters:
 *       - name: code
 *         in: path
 *         description: SCHOOL_CODE of the student to retrieve
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Successfully retrieved the student
 *       404:
 *         description: Student not found
 */
router.get('/getByCode/:code', async (req, res) => {
  try {
    const student = await Student.findOne({ SCHOOL_CODE: req.params.code });
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }
    res.json(student);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

/**
 * @swagger
 * /api/student/getAll:
 *   get:
 *     tags:
 *       - Students
 *     description: Get all students
 *     responses:
 *       200:
 *         description: Successfully retrieved all students
 */
// Get all students
router.get('/getAll', async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



module.exports = router;
