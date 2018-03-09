const conn= require('./conn');
const {Sequelize}=conn;

const Products= conn.define('product',{
  name:Sequelize.STRING,
  isSpecial: Sequelize.STRING

})


module.exports=products;