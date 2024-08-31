const express = require("express");
const router = express.Router();
const authController = require("../controller/authController.js");
const {isAuth} = require("../middleware/auth.js");

router.post("/register" , authController.register);
router.post("/login"  , authController.login);
router.get("/get-session" , isAuth , authController.checkSession);

module.exports = router;