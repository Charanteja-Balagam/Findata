const { Sequelize } = require('sequelize');
require('dotenv').config();  // Load environment variables from .env file

console.log(process.env.DB_HOST, process.env.DB_PORT); // Log to verify

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    port:process.env.DB_PORT ,
});

module.exports = sequelize;
