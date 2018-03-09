const express=require('express');
const app=express();
const path=require('path');
const port=3000;

app.use(express.static(path.join(__dirname,'/dist')));
app.get('/',(req,res,next)=>{
  res.sendFile(path.join(__dirname,'index.html'));
})

app.listen(port,()=>{
  console.log(`listing on ${port}`)
})