const dotenv=require("dotenv")
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connectDB = require('./db/mongoose');
const path =require('path')
dotenv.config({path:'../config.env'})
connectDB();



app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


app.use('/api/',require('./routes/user'));

app.get("/",(req,res)=>{
    res.json("server started")
})





const port=process.env.PORT || 4000;




app.listen(port,()=>{
    console.log(`listening at port ${port}`);
})
