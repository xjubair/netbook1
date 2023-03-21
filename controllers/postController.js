const Comment = require("../models/comments");
const Like = require("../models/likes");
const Post = require("../models/posts")


module.exports.create = async function (req,res) {
    try {
        let post = await Post.create({
            content:req.body.content,
            user:req.user._id
        })
        // function(err,post){
        //     if(err){
        //         console.log(err);
        //     }
        if(req.xhr){
            return res.json(200,{
                data:{
                    post:post
                },
                message:"post and commmet deleted"
            })
        }
            req.flash('success',"Post publushed")
            return res.redirect("back")
           
        // }
       
    } catch (error) {
        return res.redirect('back');
    }
} 

module.exports.destroy = async function(req, res){

    try{
        let post = await Post.findById(req.params.id);

        if (post.user == req.user.id){

            await Like.deleteMany({likeable: post, onModel: 'Post'});
            await Like.deleteMany({_id: {$in: post.comments}});

            post.remove();

            await Comment.deleteMany({post: req.params.id});


            if (req.xhr){
                return res.status(200).json({
                    data: {
                        post_id: req.params.id
                    },
                    message: "Post deleted"
                });
            }

            req.flash('success', 'Post and associated comments deleted!');

            return res.redirect('back');
        }else{
            req.flash('error', 'You cannot delete this post!');
            return res.redirect('back');
        }

    }catch(err){
        req.flash('error', err);
        return res.redirect('back');
    }
}