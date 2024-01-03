<<<<<<< HEAD
const express = require('express');
=======
const express = require("express");
>>>>>>> v-branch
const {
  loginController,
  registerController,
  authController,
<<<<<<< HEAD
} = require('../controllers/docCtrl');
const authMiddleware = require('../middlewares/authMiddleware');
=======
} = require("../controllers/docCtrl");
const authMiddleware = require("../middlewares/authMiddleware");
>>>>>>> v-branch
//router object
const router = express.Router();

//LOGIN
<<<<<<< HEAD
router.post('/login', loginController);
//REGISTER
router.post('/register', registerController);
//AUTH
router.post('/getUserData', authMiddleware, authController);
=======
router.post("/login", loginController);
//REGISTER
router.post("/register", registerController);
//AUTH
router.post("/getDocData", authMiddleware, authController);
>>>>>>> v-branch
module.exports = router;
