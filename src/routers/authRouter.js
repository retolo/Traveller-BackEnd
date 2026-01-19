import { Router } from "express";
import { validateBody } from "../middlewares/validateBody.js";
import { registerController, loginController, logOutController } from "../controllers/authController.js";
import { registerSchema, loginSchema } from "../validation/authValidation.js";




const authRouter = Router();

authRouter.post('/register', validateBody(registerSchema), registerController);
authRouter.post('/login', validateBody(loginSchema), loginController);
authRouter.post('/logout', logOutController)


export default authRouter;