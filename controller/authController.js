const Router = require('express').Router;
let router = Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const authService = require('../services/authService');
const userService=require('../services/userService');
const config=require('../config');

const CreateUser = require('../models/user');


router.post('/login', (req, res) => {
    console.log(req.body)
    let email=req.body.email;
    let password=req.body.Password;
    authService.singIn(email,password)
    .then(user=>{
        if(!user){
            return res.status(401).json({
                success:false,
                message:"User not found !"
            })
        }
        if(password!==user.password){
           return res.json({
                success:false,
                message:"Ohh snap ! username and password didnot matched"
            })
        }
    var token=jwt.sign({email:user.email,id:user.id},config.signature,{"expiresIn":7200})
        res.status(200).json({
            success:true,
            data:user,
            token
        })
    })
    .catch(error=>{
        console.log(error)
    })
    // CreateUser.findOne({email:req.body.email},(err,user)=>{
    //     console.log(user,"above if block")
    //     if(user){
    //         res.status(200).json({
    //             data:user,
    //             sucess:true
    //         })
    //     }
    // })
   
});

router.post('/signup', (req, res) => {
    authService.createUser(req.body)
        .then(data => {
            res.status(201).json({
                success: "true",
                message: "User created Sucessfully",
                data: data
            })
        })
})


module.exports = router;


