const express = require('express');
const router = express.Router();
const user = require('../userschema');
const bcrypt = require('bcrypt');


 
router.post('/signin',async(req,res)=>{
    const checkEmail = req.body.email;
    
    const person = await user.findOne({email:checkEmail});

    if(person){ 
        const checkPassword = await bcrypt.compare(req.body.password,person.password);
        if(checkPassword){
            res.status(200).json({success:true }); 
        }
        else{
            res.status(200).json({success:false,error:"Email or password does not match"});
        }
    }
    
    else{
        res.status(200).json({success:false,error:"User does not exist"});
    }

});

router.post('/updateAccount',async (req,res)=>{
    const name = req.body.name;
    const occupation = req.body.occupation;
    const address=req.body.address;
    const nationality=req.body.nationality;
    const nickname=req.body.nickname;
    const phone=req.body.phone;

    var emailFinding = req.body.email;
    if(name=="" && occupation=="" && address=="" && nationality==""){res.status(200).json({success:false,error:"Enter details to update value"})  }
   else{
    const newD = await user.findOneAndUpdate({ email: req.body.email},{name:name,address:address,occupation:occupation,nationality:nationality,nickname:nickname,phone:phone})
    
    res.status(200).json({success:"user info updated"})
        
    }

});

router.post('/userInfo',async(req,res)=>{
    
    var emailFinding1 = req.body.email;
    const person = await user.findOne({email:`${emailFinding1}`});
    if(!person){
        res.status(200).json({success:false}); 
    }
    // console.log(user)
    res.status(200).json({success:true,person:person}); 
});


router.post('/register',async (req,res)=>{
    var check = req.body.email;
    var aadmi = await user.findOne({email:check});
    if(!aadmi){
        const hash = await bcrypt.hash(req.body.password,10);
        const person = await user.create({ 
            "name":req.body.name,
            "email":req.body.email,
            "password":hash,
        });
        
        return res.status(200).json({success:true});
    }
    else{
        return res.status(200).json({success:false,error:"username already exist"});
        // res.send(aadmi);
    }
});

module.exports = router;