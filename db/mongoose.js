const mongoose = require('mongoose');
const dotenv=require("dotenv")
dotenv.config({path:'./config.env'})
const uri = process.env.DATABASE;
// "mongodb://localhost:27017/guvi"

const connectDB = async()=>{
    mongoose.connect(uri,()=>{
        console.log("Connected to mongo");
    })
}

module.exports = connectDB; 