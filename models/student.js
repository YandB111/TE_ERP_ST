const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  STUDENT_NAME: String,
  GENDER: String,
  DOB: String,
  SCHOOL_NAME: String,
  SCHOOL_CODE: String,
  GRADE_SECTION: String,
  ENROLLMENT_DATE: String,
  ADMITTANCE_TYPE: String,
  FATHER_NAME: String,
  FATHER_CONTACT: String,
  FATHER_EMAIL: String,
  MOTHER_NAME: String,
  MOTHER_CONTACT: String,
  MOTHER_EMAIL: String,
});

module.exports = mongoose.model('Student', studentSchema);
