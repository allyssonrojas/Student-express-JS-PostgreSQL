"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _studentController = require("../controller/studentController");

const router = (0, _express.Router)(); //localhost:4000/student/getall

router.route("/getall").get(_studentController.getAllStudentsController); //localhost:4000/student/save

router.route("/save").post(_studentController.saveAllStudentController);
var _default = router;
exports.default = _default;