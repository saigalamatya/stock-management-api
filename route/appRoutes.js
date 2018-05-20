const Router = require('express').Router;
let router = Router();

const authController = require('../controller/authController');
const inventoryController = require('../controller/inventoryController');

router.use('/auth', authController);
router.use('/createInventory', inventoryController);

module.exports = router;