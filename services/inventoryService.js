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

  async function deleteInventory(id) {
    return await InventoryModel.findByIdAndRemove(id);
  }

  return {
    createInventory: createInventory,
    fetchAllInventory: fetchAllInventory,
    deleteInventory: deleteInventory
  }
})();

module.exports = inventoryService;