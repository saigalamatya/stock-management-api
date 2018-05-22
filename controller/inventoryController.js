// const router = require('express').Router();
const Router = require('express').Router;
let router = Router();

const jwt = require('jsonwebtoken');
const config = require('../config');

const inventoryService = require('../services/inventoryService');

router.post('/create', (req, res) => {
  console.log('inside dashboard');
  console.log(req.body);
  inventoryService.createInventory(req.body)
    .then(data => {
      res.status(201).json({
        message: "Inventory created successfully",
        success: true,
        data
      })
    })
    .catch(err => {
      res.json({
        message: "Can't create Inventory",
        success: false
      })
    })
});

router.delete('/:inventoryID', (req, res) => {
  console.log('inside delete inventory');
  inventoryService.deleteInventory(req.params.inventoryId)
    .then(data => {
      res.json({
        message: "Inventory deleted successfully",
        success: true
      })
    })
    .catch(err => {
      res.json({
        message: "Couldn't delete inventroy with the specified ID",
        success: false
      })
    })
})

module.exports = router;