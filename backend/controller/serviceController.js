const Service = require('../model/vendor/serviceModel');
// const Catalogue = require('../model/vendor/catalogueModel')

exports.createService = async (req, res) => {
  const { name, priceRange, description, type, department } = req.body;

  try {
    // const result = await cloudinary.uploader.upload(image, {
    //     folder: "products",
    //     width: 300,
    //     crop: "scale"
    // })

    const service = await Service.create({
      name,
      priceRange,
      description,
      type,
      department,
    })
    res.status(201).json({
      success: true,
      service,
    })
  } catch (error) {
    console.log(error)
  }
}


exports.getService = async (req, res, next)=>{

    try {
        const services = await Service.find();
        res.status(201).json({
            success: true,
            services
        })
        
    } catch (error) {
        console.log(error);
        next(error);
        
    }
   
}


// delete product and product image in cloudinary
exports.deleteService = async (req, res, next) => {

  try {
      const service = await Service.findById(req.params.id);

      const rmService = await Product.findByIdAndDelete(req.params.id);

      res.status(201).json({
          success: true,
          message: " Service deleted",

      })

  } catch (error) {
      console.log(error);
      next(error);

  }

}
