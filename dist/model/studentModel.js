"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _connectionDB = require("../config/connectionDB");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Student = _connectionDB.connectionsdb.define('student', {
  idStudent: {
    type: _sequelize.default.INTEGER,
    primaryKey: true
  },
  nameStudent: {
    type: _sequelize.default.TEXT
  },
  ageStudent: {
    type: _sequelize.default.INTEGER
  }
});

var _default = Student;
exports.default = _default;