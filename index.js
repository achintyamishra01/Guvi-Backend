const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const connectDB = require('./db/mongoose');

connectDB();

app.get('/',(req,res)=>{
    res.send("hello");
});

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


app.use('/api/',require('./routes/user'));







const port=process.env.PORT || 4000;

if(process.env.NODE_ENV=="production"){
    app.use(express.static("Frontend/build"))
}


app.listen(port,()=>{
    console.log(`listening at port ${port}`);
})
