const express = require('express');
const router = express.Router();
const { createPost, getPost, deletePost } = require("../controller/postController");
// const multer  = require('multer')
  

router.post('/posts/create', createPost);
router.get('/posts/all', getPost);
router.delete('/posts/delete/:id', deletePost);
// router.put('/services/update/:id', updateService);
// router.get('/product/categories', productCategory);


module.exports = router;