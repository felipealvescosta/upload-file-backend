const express = require('express');
const routes  = express.Router(); 
const multer  = require("multer"); 
const multerConfig = require("./config/multer");
const PostController = require('./controllers/PostController');


routes.get('/post', PostController.index);

routes.post('/post', multer(multerConfig).single("file") , PostController.create);

routes.delete('/posts/:id', PostController.delete);

module.exports = routes; 