const Post = require('../models/Post');

module.exports = {
  async index(req, res){
    const posts = await Post.find();
    if(!posts){
      console.log('algo deu errado!');
    }
    console.log(posts);
    return res.json(posts);
    
  },

  async show(req, res){
    res.json({"message":"Olá, bem vindo ao FelpsBOX API"});
  },

  async create(req, res){
    const {originalname:name, size, key, location: url = '' } = req.file;
    const post  = await Post.create({
      name,
      size,
      key,
      url, 
    });
    return  res.json(post);
  },
  
  async delete(req,res){
    const post = await Post.findById(req.params.id);
    await post.remove();
    return res.send(); 
  },
}; 