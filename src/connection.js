import { Sequelize } from 'sequelize';
const sequelize = new Sequelize('alkemy', 'fran', '', {
    host: 'localhost',
    dialect: 'mysql'
});



export default sequelize