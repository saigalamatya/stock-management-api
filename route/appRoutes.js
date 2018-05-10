const Router=require('express').Router;
let router=Router();

const authController=require('../controller/authController');

router.use('/auth',authController);

module.exports=router;