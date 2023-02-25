const express = require('express');
const router = express.Router();
const { createService, getService, deleteService, ServiceCategory, updateService } = require("../controller/serviceController");
// const { isAuthenticated, isAdmin } = require("../middleware/auth");


router.post('/services/create', createService);
router.get('/services/all', getService);
router.delete('/services/delete/:id', deleteService);
// router.put('/services/update/:id', updateService);
// router.get('/product/categories', productCategory);


module.exports = router;