//profile 
module.exports.profile = function (req,res) {
    return res.render('user_profile',{
        title:"User Profile"
    })
}

//sign up
module.exports.signUp = function (req,res) {
    return res.render('signup',{
        title:"Signup"
    })
}
//signin
module.exports.signIn = function (req,res) {
    return res.render('signin',{
        title:"Signup"
    })
}
//session
module.exports.createSession = function (req,res) {
   
}