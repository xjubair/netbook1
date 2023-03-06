const User = require("../../../models/users");
const jwt = require('jsonwebtoken')


//
module.exports.signInUser = async function(req,res){
    try {
        let user = await User.findOne({email:req.body.email});
        if(!user || user.password != req.body.password){
            return res.json(422,{
                message:"Invalid Username or Password"
            })
        }
        return res.json(200,{
            message:"Here is your token please keep it safe",
            date:{token:jwt.sign(user.toJSON(),'secret',{expiresIn: '1000000'})}
        })
    } catch (error) {
        console.log(error);
        
        return res.json(500,{
            message: "Internal Server Error",
        })
    }
}