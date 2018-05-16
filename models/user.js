const mongoose=require('mongoose');
let Schema=mongoose.Schema;

const UserSchema=new Schema({
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    active:Boolean,
    role:String
});

module.exports=mongoose.model("CreateUser",UserSchema);