var inventoryService = (() => {

  const InventoryModel = require('../models/inventory');

  async function createInventory(inventory) {
    return await InventoryModel.create({
      productName: inventory.productName,
      quantity: inventory.quantity,
      measurement: inventory.measurement,
      originalPrice: inventory.originalPrice,
      sellingPrice: inventory.sellingPrice,
      profit: inventory.profit,
      supplier: inventory.supplier
    })
  }

  async function fetchAllInventory() {
    return await InventoryModel.find();
  }

  async function fetchInventoryById(inventoryId) {
    return await InventoryModel.findById(inventoryId);
  }

  // async function editInventory(body, inventoryId) {
  //   return await InventoryModel.findByIdAndUpdate(inventoryId, {
  //     $set: {
  //       productName: body.productName,
  //       quantity: body.quantity,
  //       measurement: body.measurement,
  //       originalPrice: body.originalPrice,
  //       sellingPrice: body.sellingPrice,
  //       profit: body.profit,
  //       supplier: body.supplier
  //     }
  //   });
  // }

  async function deleteInventory(id) {
    return await InventoryModel.findByIdAndRemove(id);
  }

  return {
    createInventory: createInventory,
    fetchAllInventory: fetchAllInventory,
    fetchInventoryById: fetchInventoryById,
    deleteInventory: deleteInventory,
    // editInventory: editInventory
  }
})();

module.exports = inventoryService;