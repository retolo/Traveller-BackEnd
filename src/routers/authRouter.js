import { Router } from "express";
import { validateBody } from "../middlewares/validateBody";
import { registerController, loginController, logOutController } from "../controllers/authController";
import { registerSchema, loginSchema } from "../validation/authValidation";




const authRouter = Router();

authRouter.post('/auth/register', validateBody(registerSchema), registerController);
authRouter.post('/auth/login', validateBody(loginSchema), logOutController);
authRouter.post('/auth/logout', logOutController)


export default authRouter;