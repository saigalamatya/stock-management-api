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

router.get('/',(req, res) => {
  console.log('inside get inventory');
  inventoryService.fetchAllInventory()
    .then(data => {
      res.status(201).json({
        message: "Fetching inventory successful",
        success: true,
        data
      })
    })
    .catch(err => {
      res.json({
        message: "Can't fetch inventory",
        success: false,
        error: err
      })
    })
});

router.get('/:inventoryId', (req, res) => {
  console.log('inside get inventory by id');
  inventoryService.fetchInventoryById(req.params.inventoryId)
    .then(data => {
      res.status(201).json({
        message: "Fetch inventory by inventory Id successful",
        success: true,
        data
      })
    })
    .catch(err => {
      res.json({
        message: "Can't fetch inventory with specified id",
        success: false,
        error: err
      })
    });
});

router.delete('/:inventoryId', (req, res) => {
  console.log('inside delete inventory');
  inventoryService.deleteInventory(req.params.inventoryId)
    .then(data => {
      res.status(200).json({
        message: "Inventory deleted successfully",
        success: true,
        data
      })
    })
    .catch(err => {
      res.json({
        message: "Couldn't delete inventroy with the specified ID",
        success: false,
        error: err
      })
    })
});

// router.patch('/edit/:inventoryId', (req, res) => {
//   console.log('inside patch inventory');
//   console.log('req.body', req.body);
//   inventoryService.editInventory(req.body, req.params.inventoryId)
//     .then(data => {  
//       res.json({
//         message: "Inventory edited successfully",
//         success: true
//       })
//     })
//     .catch(err => {
//       res.json({
//         message: "Inventory edit failed",
//         success: false,
//         error: err
//       })
//     });
// });

module.exports = router;