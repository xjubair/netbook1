const Comment = require("../models/comments");
const Post = require("../models/posts")


module.exports.create = function (req,res) {
    Post.create({
        content:req.body.content,
        user:req.user._id
    },function(err,post){
        if(err){
            console.log(err);
        }
        req.flash('success',"Post publushed")
        return res.redirect("back")
       
    })
} 

module.exports.destroy = function (req,res) {
    console.log(req.params.id);
    Post.findById(req.params.id,function (err,post) {
        if(post.user==req.user.id){
            post.remove();
            Comment.deleteMany({post:req.params.id},function(err){
                req.flash('success',"Post Deletedd")
                return res.redirect("back")
            })
        }else{
            return res.redirect("back")
        }
    })
} 
