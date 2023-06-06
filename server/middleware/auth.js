const {User} = require("../models/User");

const auth = async (req,res,next) =>{
    try{
    let token = req.cookies.x_auth;
   const user = await User.findByToken(token);
   if(!user) return res.json({isAuth:false, error: true});
    req.token= token;
    req.user= user;
    next();
}catch(err){ throw(err);
}}

module.exports = {auth}; 