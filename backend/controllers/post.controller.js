import Post from "../models/post.model.js"
const getPosts = async (req,res) =>{
    const posts  = await Post.find();
    res.status(200).json(posts);
}
const createPost = async(req,res)=>{
    console.log("checking the req body ",req.body)
    const postBody = req.body;
    const newPost = new Post(postBody);
    await newPost.save();
    res.status(201).json(newPost);
}

export {
getPosts,
createPost}