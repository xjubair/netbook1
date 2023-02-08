const User = require('../models/users')
//profile 
module.exports.profile = function (req,res) {
    if(req.cookies.user_id){
        User.findById(req.cookies.user_id,function(err,user){
            if(err){
                console.log(error);
                return;
            }
            if(user){
                return res.render('user_profile',{
                    title:"User Profile",
                    user:user
                })
            } else{
                res.redirect('/users/sign-in')
            }
        })
    }

    // return res.render('user_profile',{
    //     title:"User Profile"
    // })
}

//sign up
module.exports.signUp = function (req,res) {
    
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
    console.log(req.body);
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
    User.findOne({email:req.body.email},function(err,user){
        if(err){
            console.log(error);
            return;
        }
        if(user){
            if(user.password !=req.body.password){
                return res.redirect('back')
            }
            res.cookie('user_id',user.id)
            return res.redirect('/users/profile')
        } else{
            return res.redirect('back')
        }
        
    })
}