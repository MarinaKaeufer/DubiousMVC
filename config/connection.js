const Sequelize = require('sequelize');
require('dotenv').config();

var database = process.env.DB_NAME || 'dubious_mvc'

var sequelize = ""

if (process.env.DATABASE_URL) {
    sequelize = new Sequelize(database)
}
else {
    sequelize = new Sequelize(database, process.env.DB_USER || 'user',process.env.DB_PASSWORD || 'password', {
        dialect: 'mysql'
    });
}



// const sequelize = new Sequelize(
//   process.env.DB_NAME || 'dubious_mvc',
//   process.env.DB_USER,
//   process.env.DB_PASSWORD,
//   {
//     host: 'localhost',
//     dialect: 'mysql',
//     port: 3306,
//   }
// );

module.exports = sequelize;
