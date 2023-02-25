const Post = require('../model/vendor/postModel')


exports.createPost = async (req, res) => {
    
    const { title, description, file,  likes, comments } = req.body

  try {

    const post = await Post.create({
      title,
      description,
      file,
      likes,
      comments,
    })
    res.status(201).json({
      success: true,
      post,
    })
  } catch (error) {
    console.log(error)
  }
}

exports.getPost = async (req, res, next) => {
  try {
    const posts = await Post.find()
    res.status(201).json({
      success: true,
      posts,
    })
  } catch (error) {
    console.log(error)
    next(error)
  }
}

// delete product and product image in cloudinary
exports.deletePost = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id)

    const rmPost = await Product.findByIdAndDelete(req.params.id)

    res.status(201).json({
      success: true,
      message: ' Post deleted',
    })
  } catch (error) {
    console.log(error)
    next(error)
  }
}
