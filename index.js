const dotenv=require("dotenv")
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connectDB = require('./db/mongoose');
const path =require("path")
dotenv.config({path:'../config.env'})
connectDB();



const PORT=process.env.PORT || 4000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());



app.get("/",(req,res)=>{
    res.send("server started")
})

app.use('/api/',require('./routes/user'));

if(process.env.NODE_ENV=='production'){
    app.use(express.static("Frontend/build"))
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname,'Frontend','build','index.html'))
    })
}



app.listen(PORT,()=>{
    console.log(`listening at port ${PORT}`);
})
