const dotenv=require("dotenv")
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connectDB = require('./db/mongoose');
const router = require("./routes/user");
dotenv.config({path:'../config.env'})
connectDB();



app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


app.get("/",(req,res)=>{
    res.json("server started")
})
app.use('/api/',require('./routes/user'));
app.use(router);





const port=process.env.PORT || 4000;




app.listen(port,()=>{
    console.log(`listening at port ${port}`);
})
