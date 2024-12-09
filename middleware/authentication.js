const jwt = require("jsonwebtoken");
const User = require('../Modals/user')

const auth = async (req, res, next)=>{
     const token = req.cookies.token;
     if(!token){
        return res.status(401).json({erroe:"No token, authentication denied "});

     }
     else{
        try{
            const decode = jwt.verify(token, "its_my_secrect_key")
            req.user = await User.findById(decode.userId).select('-password');
            next()

        }catch(err){
            res.status(401).json({erroe:" token is  invalid "});
        }
     }
}
module.exports = auth;