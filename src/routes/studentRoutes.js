import {Router} from "express"

import { getAllStudentsController, saveAllStudentController } from "../controller/studentController"

const router = Router();

//localhost:4000/student/getall
router.route("/getall")
.get(getAllStudentsController)



//localhost:4000/student/save
router.route("/save")
.post(saveAllStudentController)


export default router;