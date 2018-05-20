const mongoose=require('mongoose');
let Schema=mongoose.Schema;

const SupplierSchema=new Schema({
    supplierName:{
        type:String,
        require:true
    },
    address:{
        type:String,
        require:true
    },
    contact_no:{
        type:String,
        required:true
    },
   
});

module.exports=mongoose.model("Supplier",SupplierSchema);