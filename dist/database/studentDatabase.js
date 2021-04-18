"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.saveStudent = exports.getAllStudents = void 0;

var _connectionDB = require("../config/connectionDB");

const getAllStudents = async () => {
  try {
    const [results, metadata] = await _connectionDB.connectionsdb.query("SELECT * FROM Student");
    console.log(results);
    return results;
  } catch (error) {
    console.log(error);
  }
};

exports.getAllStudents = getAllStudents;

const saveStudent = async (nameVariable, ageVariable) => {
  try {
    const [results, metadata] = await _connectionDB.connectionsdb.query("INSERT INTO Student (nameStudent, ageStudent) VALUES (:nameStudent, :ageStudent)", {
      replacements: {
        nameStudent: nameVariable,
        ageStudent: ageVariable
      }
    });
    return "The student was created";
  } catch (error) {
    console.log(error);
  }
};

exports.saveStudent = saveStudent;