const CatalogueDoc = require('../model/vendor/catalogueDocModel')

exports.createCatalogueDoc = async (req, res) => {
  const {
    // service,
    name,
    valid_till,
    attachment
  } = req.body

  try {
    // const result = await cloudinary.uploader.upload(image, {
    //     folder: "products",
    //     width: 300,
    //     crop: "scale"
    // })

    const catalogueDoc = await CatalogueDoc.create({
      // service,
      name,
      valid_till,
      attachment,
    })
    res.status(201).json({
      success: true,
      catalogueDoc,
    })
  } catch (error) {
    console.log(error)
  }
}


exports.getCatalogueDoc = async (req, res, next)=>{

  try {
      const catalogueDoc = await CatalogueDoc.find();
      res.status(201).json({
          success: true,
          catalogueDoc
      })
      
  } catch (error) {
      console.log(error);
      next(error);
      
  }
 
}
