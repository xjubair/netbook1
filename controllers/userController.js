const User = require("../models/users")


//profile 
module.exports.profile = function (req,res) {
    User.findById(req.params.id,function (err,user) {
        return res.render('user_profile',{
            title:"User Profile",
            profile_user:user
    })

    
   
    })
}

//profile 
module.exports.update = function (req,res) {
    if(req.user.id==req.params.id){
        User.findByIdAndUpdate(req.params.id,req.body, function(err,user){
            return res.redirect('back')
        })
    }else{
        return res.status(401).send('Unauthorised')
    }
}

//sign up
module.exports.signUp = function (req,res) {
    if(req.isAuthenticated()){
        return res.redirect('/users/profile')
    }
    return res.render('signup',{
        title:"Signup"
    })
}
//signin
module.exports.signIn = function (req,res) {
    // console.log(req.cookies);
    console.log(req.body);
    return res.render('signin',{
        title:"Signup"
    })
}
//session
module.exports.createSession = function (req,res) {
    if(req.body.password !=req.body.confirm_password){
    return res.redirect('back')
   }
   User.findOne({email:req.body.email},function(err,user){
    if(err){
        console.log(error);
        return;
    }
    if(!user){
        User.create(req.body,function(err,user){
            if(err){
                console.log(error);
                return;
            }
            return res.redirect('back')
        }
            )
    } else{
        return res.redirect('back')
    }
   })

}
//signInUser
module.exports.signInUser = function (req,res) {
    return res.redirect('/');

    
}

//logout

module.exports.logout = function (req,res,next) {
    req.logout(function(err){
        console.log(err);
    });

    return res.redirect('/');

    
}