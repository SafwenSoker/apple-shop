const express = require('express')
const router = express.Router()

const auth = require('./../middlewares/auth')
const userController = require('./../controllers/user')

router.post('/signup', userController.signup)
router.post('/login', userController.login)
router.get('/profile/:id', auth, userController.profile)
module.exports = {
    login, signup
}