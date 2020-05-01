const express = require('express');
const multer  = require("multer"); 
const multerConfig = require("./config/multer");
const PostController = require('./controllers/PostController');

const routes  = express.Router(); 
const Post = require("./models/Post");

routes.get('/post', PostController.index);

routes.post('/post', multer(multerConfig).single("file") , PostController.create);

routes.delete('/posts/:id', PostController.delete);

module.exports = routes; 