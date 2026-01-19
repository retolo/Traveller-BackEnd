import { Router } from "express";
import { validateBody } from "../middlewares/validateBody.js";
import { getSavedStoriesController, getStoryByIdController, createStoryController, getStoriesController, addSavedStoryController, deleteSavedStoryController, updateStoryController} from "../controllers/storyController.js";
import { createStorySchema, updateStorySchema} from "../validation/storyValidation.js";
const storyRouter = Router();



storyRouter.get('/stories', getStoriesController);
storyRouter.get('/saved-stories', getSavedStoriesController);
storyRouter.post('/create-story', validateBody(createStorySchema), createStoryController);
storyRouter.get('/stories/:storyId', getStoryByIdController);
storyRouter.post('/add-story', addSavedStoryController);
storyRouter.delete('/delete-story', deleteSavedStoryController);
storyRouter.patch('/update-story',validateBody(updateStorySchema),updateStoryController)


export default storyRouter;