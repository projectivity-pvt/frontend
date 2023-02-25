const express = require('express');
const router = express.Router(); 
const {createCatalogue, getCatalogue} = require("../controller/catalogueController")
const multer = require('multer');


const imageStorage = multer.diskStorage({
    // Destination to store image     
    destination: '/images', 
      filename: (req, file, cb) => {
          cb(null, file.fieldname + '_' + Date.now() 
             + path.extname(file.originalname))
            // file.fieldname is name of the field (image)
            // path.extname get the uploaded file extension
    }
});

const imageUpload = multer({
    storage: imageStorage,
    limits: {
      fileSize: 1000000 // 1000000 Bytes = 1 MB
    },
    fileFilter(req, file, cb) {
      if (!file.originalname.match(/\.(png|jpg)$/)) { 
         // upload only png and jpg format
         return cb(new Error('Please upload a Image'))
       }
     cb(undefined, true)
  }
}) 

router.post('/catalogue/create', imageUpload.single('attachment'), createCatalogue );
router.get('/catalogue/all', getCatalogue );



module.exports = router;