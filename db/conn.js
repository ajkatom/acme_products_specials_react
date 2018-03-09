const Sequelize = require('sequelize');

conn= new Sequelize.define(process.env.DATABASE_URL);


module.exports=conn;