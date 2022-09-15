import sequelize from '../connection';
const {  DataTypes } = require('sequelize');
import Movies from './MoviesModel';
import { Gender,Type } from './GenderModel'

const Characters = sequelize.define('Characters',{
    Age:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    Img:{
        type: DataTypes.STRING
    },
    History:{
        type: DataTypes.STRING,
        allowNull: false
    },
    Weight:{
        type: DataTypes.FLOAT,
        allowNull: false
    },
    Name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    ID:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }
},{timestamps: false})

Characters.belongsToMany(Movies, { through: 'Movies/Character',timestamps:false})



export default Characters