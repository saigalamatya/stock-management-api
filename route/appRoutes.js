const Router=require('express').Router;
let router=Router();
const authenticate=require('../middleware/authentication');

const authController=require('../controller/authController');
const supplierController=require('../controller/supplierController');

router.use('/auth',authController);
router.use('/supplier',supplierController);

module.exports=router;