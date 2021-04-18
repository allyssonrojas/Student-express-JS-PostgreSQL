import {connectionsdb} from "../config/connectionDB"


export const getAllStudents = async() =>{
    try{
        const [results, metadata] = await connectionsdb.query("SELECT * FROM Student")
        console.log(results)
        return results
    }catch(error){
        console.log(error)
    }
}

export const saveStudent = async(nameVariable, ageVariable) =>{
    try{
        const[results, metadata] = await connectionsdb.query("INSERT INTO Student (nameStudent, ageStudent) VALUES (:nameStudent, :ageStudent)",
        {
            replacements:{
                nameStudent: nameVariable,
                ageStudent: ageVariable
            }
        })
        return "The student was created"
    }catch(error){
        console.log(error)
    }
}
