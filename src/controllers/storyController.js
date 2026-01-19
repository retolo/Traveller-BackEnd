
import { getSavedStories, getStories, createStory, getStoryById, addSavedStory, deleteSavedStory, updateStory} from "../services/storiesServices.js";
import { parsePaginationParams } from "../utils/parsePaginationParams.js";




export const getSavedStoriesController = async (req, res) =>{
    const {page, perPage} = parsePaginationParams(req.query)
    const savedStories = await getSavedStories({page, perPage});


    res.json({
        status: 200,
        message: 'Successfully found saved stories!',
        data: {
            savedStories: savedStories
        }
    })
}



export const getStoriesController = async (req, res) =>{
    const {page, perPage} = parsePaginationParams(req.query)
    const stories = await getStories({page, perPage});


    res.json({
        status: 200,
        message: 'Successfully found  stories!',
        data: {
            stories: stories
        }
    })
}




export const createStoryController = async (req,res) =>{
    const payload = req.body;
    const userId =  req.user._id



    const newStory = await createStory(payload, userId)


    res.json({
        status: 201,
        message: 'Story successfully created!',
        data: {
            newStory: newStory
        }
    })
}


export const getStoryByIdController = async (req, res) =>{
    const {storyId} = req.params;

    const story = await getStoryById(storyId)

    res.json({
        status: 200,
        message: `Successfully found story with id ${storyId}!`,
        data: {
            story: story
        }
    })

}

export const addSavedStoryController = async (req, res) =>{
    const userId = req.user._id;

    const {storyId} = req.params;

    const savedStory = await addSavedStory(userId, storyId);


    res.json({
        status: 201,
        message: 'Successfully added story!',
        data :{
            savedStory: savedStory
        }
    })
}



export const deleteSavedStoryController = async (req, res) =>{
    const userId = req.user._id;

    await deleteSavedStory(userId);


    res.status(204).send();
}

export const updateStoryController = async (req, res) =>{
    const userId = req.user._id;
    const {storyId} = req.params;
    const payload = req.body;

    const story = await updateStory(userId, storyId, payload);


    res.json({
        status: 200,
        message: 'Successfully your story was updated!',
        data:{
            story: story
        } 

    })
}
