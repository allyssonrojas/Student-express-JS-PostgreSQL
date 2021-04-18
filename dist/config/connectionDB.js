"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.connectionsdb = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const connectionsdb = new _sequelize.default("CollegeDB", "protobotUser", "passwordUser", {
  host: "localhost",
  dialect: 'postgres'
});
exports.connectionsdb = connectionsdb;