const express = require('express');
const {
  loginController,
  registerController,
  authController,
} = require('../controllers/docCtrl');
const authMiddleware = require('../middlewares/authMiddleware');
//router object
const router = express.Router();

//LOGIN
router.post('/login', loginController);
//REGISTER
router.post('/register', registerController);
//AUTH
router.post('/getUserData', authMiddleware, authController);
module.exports = router;
