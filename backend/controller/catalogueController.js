const Catalogue = require('../model/vendor/catalogueModel')

exports.createCatalogue = async (req, res) => {
  const {
    // service,
    name,
    quantity,
    model_no,
    rate,
    description,
    rate_for,
    attachment,
  } = req.body

  try {
    // const result = await cloudinary.uploader.upload(image, {
    //     folder: "products",
    //     width: 300,
    //     crop: "scale"
    // })

    const catalogue = await Catalogue.create({
      // service,
      name,
      quantity,
      model_no,
      rate,
      description,
      rate_for,
      attachment,
    })
    res.status(201).json({
      success: true,
      catalogue,
    })
  } catch (error) {
    console.log(error)
  }
}


exports.getCatalogue = async (req, res, next)=>{

  try {
      const catalogue = await Catalogue.find();
      res.status(201).json({
          success: true,
          catalogue
      })
      
  } catch (error) {
      console.log(error);
      next(error);
      
  }
 
}
