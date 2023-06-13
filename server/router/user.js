const express = require('express')
const router = express.Router()
const userController = require('../controller/user')
module.exports = router

router.post('/addUser',userController.addUser)

router.get('/',userController.getUser)

router.put('/userEdit/:id' , userController.getEdit)

router.delete('/userDelete/:id' , userController.getDelete)