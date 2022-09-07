const mongoose = require('mongoose');

const GraphSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    nickname:{
        type:String,
        default:""

    },
    nationality:{
        type:String,
        default:""

    },
   
    occupation:{
        type:String,
        default:""
    },
    address:{
        type:String,
        default:""
    },
    phone:{
        type:Number
    }
});

module.exports = mongoose.model("user",GraphSchema);