import {getAllStudents, saveStudent} from "../database/studentDatabase"

export const getAllStudentsController = async(req, res) =>{

    const allStudents = await getAllStudents();

    try{
        if(allStudents != ""){
            return res.json({
                status: 200,
                message: "The student was found",
                data: allStudents
            })
        }
    }catch(error){
        return res.json({
            status: 500,
            message: error
        })
    }
}

export const saveAllStudentController = async(req, res) =>{

    const {nameStudent, ageStudent} = req.body;

    try{
        const newStudent = await saveStudent(nameStudent, ageStudent)
        console.log(nameStudent)
        if(newStudent == "The student was created"){
            return res.json({
                status:201,
                message: newStudent
            })
        }
    }catch(error){
        return res.json({
            status:500,
            message:error
        })
    }
}