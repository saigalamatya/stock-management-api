const Router = require('express').Router;
let router = Router();

const authenticate = require('../middleware/authentication');

const authController = require('../controller/authController');
const supplierController = require('../controller/supplierController');
const inventoryController = require('../controller/inventoryController');
const userController = require('../controller/userController');

router.use('/auth', authController);
router.use('/inventory', authenticate, inventoryController);
router.use('/supplier', authenticate, supplierController);
router.use('/users', authenticate, userController);

module.exports = router;