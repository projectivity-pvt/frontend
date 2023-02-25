const express = require('express');
const router = express.Router(); 
const {createCatalogueDoc, getCatalogueDoc} = require("../controller/catalogueDocController")


router.post('/catalogueDoc/create', createCatalogueDoc );
router.get('/catalogueDoc/all', getCatalogueDoc );



module.exports = router;