const express = require('express')
const userController = require('../Controllers/userController')
const router = express.Router()
const catchAsync = require('../Utils/catchAsync')

router.get('/:id', catchAsync(userController.getUser))
router.post('/block/:id', catchAsync(userController.blockUser))
router.post('/report/:id', catchAsync(userController.reportUser))
router.patch('/', catchAsync(userController.updateUser))
// chat?
//images and cloudinary

module.exports = router