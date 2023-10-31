import { Router } from "express"
import generator from "../../core/utils/utils"
import RegisterController from "./authController/registerController/RegisterController"
import LoginController from "./authController/loginController/LoginController"
import auth from "../../core/middlewares/auth"
import ProfileController from "./authController/profileController/ProfileController"

const router = Router()

router.post('/register', generator(RegisterController.register, ['body'], 201))
router.post('/login', generator(LoginController.login, ['body.password', 'body.email'], 200))
router.post('/profile', auth, generator(ProfileController.login, ['token.id'], 200))

export {router}
