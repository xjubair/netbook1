const Comment = require("../../../models/comments")
const Post = require("../../../models/posts")

module.exports.index = async function(req,res){
    let posts = await Post.find({})
    .populate('user')
    .populate({
        path: 'comments',
        populate:{
            path: 'user'
        }
    })
    return res.json(200,{
        message: "List of posts",
        posts /*it could be anything*/ :posts
    })
}

module.exports.destroy = async function(req,res){
   let post = await Post.findById(req.params.id)

        post.remove();
        await Comment.deleteMany({post:req.params.id})
 
        return res.json(200,{
            message: "Post and Comments Deleted",
        })
}