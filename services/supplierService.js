const mongoose=require('mongoose');


var supplierService=(()=>{
    const SupplierModel=require('./../models/supplier');

    async function addSupplier(supplier){
        return await SupplierModel.create({
            supplierName:supplier.name,
            address:supplier.address,
            contact_no:supplier.contact
        })
    }

    async function fetchSupplier(){
        return await SupplierModel.find();
    }

    async function deleteSupplier(supplierId){
       return await SupplierModel.findByIdAndRemove(supplierId);
    }

    return {
        addSupplier:addSupplier,
        fetchSupplier:fetchSupplier,
        deleteSupplier:deleteSupplier
    }

})();

module.exports=supplierService;