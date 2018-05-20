const Router = require('express').Router;
let router = Router();

const authenticate=require('../middleware/authentication');

const authController = require('../controller/authController');
const supplierController=require('../controller/supplierController');
const inventoryController = require('../controller/inventoryController');

router.use('/auth', authController);
router.use('/inventory', inventoryController);
router.use('/supplier',supplierController);

module.exports = router;