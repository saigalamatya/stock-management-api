


let userService=(()=>{
    let CreateUser=require('../models/user');
   
    async function fetchByEmail(email){
        return CreateUser.findOne({email:email});    
    }

    function checkPassword(userPwd,dbPwd){
        return new Promise((resolve,reject)=>{
            if(userPwd!==dbPwd){
                let msg={
                    success:false,
                    message:"Ohh snaps ! username and password didnot matched."
                }
               return reject(msg);
            }  
            let msg={
                success:true,
                message:"Username and password matched"
            }
            return resolve(msg);
        })
        
    }



    return {
        fetchByEmail:fetchByEmail,
        checkPassword:checkPassword
    }

})();

module.exports=userService;