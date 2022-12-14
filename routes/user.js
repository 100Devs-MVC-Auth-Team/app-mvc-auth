const express = require('express')
const router = express.Router()
const userController = require('../controllers/user') 
const { ensureAuth } = require('../middleware/auth')

router.get("/:userName", userController.getUser);

module.exports = router;