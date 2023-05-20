










const express=require('express');
const bodyParser = require('body-parser');
const mongoose=require('mongoose');
const app=express();



app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use(bodyParser.json());





app.use('/api/bussiness',require('./router/business.-router'))
app.use('/api/science',require('./router/science-router'))
app.use('/api/sport',require('./router/sport-route'))


const url="mongodb+srv://max:10112000@cluster0.xdpxd.mongodb.net/News?retryWrites=true&w=majority"
const port=3000;
mongoose.connect(url,{})
.then((result)=>{
      console.log("database connected")
})
.catch((err)=>{
  console.log(err);
});
app.listen(port,()=>{
  console.log( `the sever run in ${port}`);
})