import  { DataTypes } from 'sequelize';
import sequelize from '../connection';

const Movies = sequelize.define('Movie',{
    Img:{
        type: DataTypes.STRING
    },
    Title:{
        type: DataTypes.STRING,
        allowNull: false
    },
    Creation:{
        type: DataTypes.DATE,
        allowNull: false
    },
    Qualificacion:{
        type: DataTypes.FLOAT,
        allowNull: false
    },
    ID:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }
},{timestamps: false})

export default Movies