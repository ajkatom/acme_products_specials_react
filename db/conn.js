const Sequelize = require('sequelize');

const conn = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/products_react_db' ,{
  logging:false
});


module.exports=conn;