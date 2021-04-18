"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.saveAllStudentController = exports.getAllStudentsController = void 0;

var _studentDatabase = require("../database/studentDatabase");

const getAllStudentsController = async (req, res) => {
  const allStudents = await (0, _studentDatabase.getAllStudents)();

  try {
    if (allStudents != "") {
      return res.json({
        status: 200,
        message: "The student was found",
        data: allStudents
      });
    }
  } catch (error) {
    return res.json({
      status: 500,
      message: error
    });
  }
};

exports.getAllStudentsController = getAllStudentsController;

const saveAllStudentController = async (req, res) => {
  const {
    nameStudent,
    ageStudent
  } = req.body;

  try {
    const newStudent = await (0, _studentDatabase.saveStudent)(nameStudent, ageStudent);
    console.log(nameStudent);

    if (newStudent == "The student was created") {
      return res.json({
        status: 201,
        message: newStudent
      });
    }
  } catch (error) {
    return res.json({
      status: 500,
      message: error
    });
  }
};

exports.saveAllStudentController = saveAllStudentController;