import  { DataTypes } from 'sequelize'
import sequelize from '../connection';

export const users = sequelize.define("Users",{
    ID:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
     username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
     },
     password: {
        type: DataTypes.STRING,
        allowNull: false
     },
     email:{
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
     }
},{timestamps: false})