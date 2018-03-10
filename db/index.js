const Product=require('./products');
const conn =require('./conn')
const {Sequelize}= conn 


 const data = [{ name: 'foo', isSpecial: true },{ name: 'bar', isSpecial: false },{ name: 'bazz', isSpecial: false }]

const sync =()=>{
 return Product.sync({force:true})
   .then(()=>{
     return Promise.all(data.map((product) => Product.create(product))) 
   })
   .catch(console.error)
  
}

module.exports={
  sync,
  model:{
      Product
  }
}