import Sequelize from "sequelize"

export const connectionsdb = new Sequelize(
    "CollegeDB",
    "protobotUser",
    "passwordUser",
    {
        host:"localhost",
        dialect: 'postgres'
    }
);