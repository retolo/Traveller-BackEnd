import authRouter from "./authRouter.js";
import travelerRouter from "./travelerRouter.js";
import storyRouter from "./storyRouter.js";
import { Router } from "express";

const router = Router();

router.use('/auth', authRouter)
router.use('/user', travelerRouter);
router.use('/story', storyRouter)
export default router;