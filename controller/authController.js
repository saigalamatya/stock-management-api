const Router = require('express').Router;
let router = Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const authService=require('../services/authService');

const User=require('../models/user');


router.post('/login',(req,res)=>{
    console.log(req.body,"request");
    res.json({
        message:"ok"
    })
});

router.post('/signup',(req,res)=>{
    authService.createUser(req.body)
    .then(data=>{
        res.status(201).json({
            success:"true",
            message:"User created Sucessfully",
            data:data
        })
    })
})


module.exports=router;


