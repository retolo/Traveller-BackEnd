import { Router } from "express";
import { validateBody } from "../middlewares/validateBody.js";
import { updateAvatarSchema, changeDataUserSchema} from "../validation/userValidation.js";
import { getTravelersByIdController, getTravelersController, updateAvatarUserController, updateDataUserController} from "../controllers/travelersController.js";

const travelerRouter = Router();



travelerRouter.get('/travelers', getTravelersController);
travelerRouter.get('/travelers/:travelerId', getTravelersByIdController);
travelerRouter.post('/update-avatar',validateBody(updateAvatarSchema), updateAvatarUserController);
travelerRouter.post('/update-user-data',validateBody(changeDataUserSchema), updateDataUserController);

export default travelerRouter;