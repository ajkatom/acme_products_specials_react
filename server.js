const express=require('express');
const app=express();
const path=require('path');
const db = require('./db');
const {Product}=db.model
const port= process.env.PORT || 3000;
app.use(require('body-parser').json());
app.use(express.static(path.join(__dirname,'/dist')));

app.get('/',(req,res,next)=>{
  res.sendFile(path.join(__dirname,'src/index.html'));
})

app.get('/api/products',(req,res,next)=>{
    Product.findAll()
    .then((products)=>{
      res.send(products)
    })
    .catch(next)
})
app.put('/api/products/:id',(req,res,next)=>{
    Product.findById(req.params.id)
    .then((product)=>{
      console.log(req.body.isSpecial)
      product.isSpecial=req.body.isSpecial;
      return product.save();
    })

    .catch(next)
})


app.listen(port,()=>{
  console.log(`listing on ${port}`)
})

db.sync()
.then(()=>{
  console.log('synced & seeded')
})