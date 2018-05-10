var authService=(()=>{

    let CreateUser=require('../models/user');

    async function createUser(user){
        console.log(user,"user")
        return await CreateUser.create({
            username:user.userName,
            password:user.password,
            active:true,
            role:"admin"
        })
    }

    return {
        createUser:createUser
    }

})();

module.exports=authService;