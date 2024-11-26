const express = require("express");
const router = express.Router();
const authControllers = require("../controllers/auth_controller")
const signupSchema = require("../validators/auth_validator")
const validate = require("../middlewares/validate_middleware")
const authMiddleware = require("../middlewares/auth-Middleware")

router.route("/").get(authControllers.home);

router.route("/register").post(validate(signupSchema), authControllers.register)


router.route("/login").post(authControllers.login)

router.route("/user").get(authMiddleware, authControllers.user)


module.exports = router;