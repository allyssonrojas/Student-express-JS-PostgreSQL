import Sequelize from "sequelize"
import {connectionsdb} from "../config/connectionDB"

const Student = connectionsdb.define('student', {
    idStudent:{
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    nameStudent: {
        type: Sequelize.TEXT
    },
    ageStudent:{
        type: Sequelize.INTEGER
    }
})

export default Student;