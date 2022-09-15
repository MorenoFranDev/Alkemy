import { Sequelize } from 'sequelize';
const sequelize = new Sequelize('alkemy', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});



export default sequelize
