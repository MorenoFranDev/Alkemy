import { DataTypes } from 'sequelize';
import sequelize from '../connection';
import Movies from './MoviesModel';
sequelize.sync()

export const Gender = sequelize.define('Gender', {
    Img: {
        type: DataTypes.STRING
    },
    Title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }
},{timestamps: false})

export const Type = sequelize.define('Type', {
    Title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }
},{timestamps: false})

Gender.hasOne(Movies)
Type.hasOne(Movies)
