import { TravelersCollection } from "../db/models/travelers.js";
import createHttpError from "http-errors";
import { SavedArticleCollection } from "../db/models/savingArcticle.js";
import { CategoriesCollection } from "../db/models/categories.js";
import { StoriesCollection } from "../db/models/stories.js";


export const getStories = async ({page, perPage}) =>{
    const limit = perPage;
    const skip = page > 0 ? (page - 1) *perPage : 0;
    
    const [stories, totalItems] = await Promise.all([
        await TravelersCollection.find().limit(limit).skip(skip).exec(),
        TravelersCollection.countDocuments()
    ])

    const totalPages = Math.ceil(totalItems / perPage);



    return{
        data: stories,
        page: page,
        perPage: perPage,
        totalItems: totalItems,
        totalPages: totalPages,
        hasNextPage: totalItems > 1,
        hasPreviousPage: page > 1
    }
}


export const getSavedStories = async ({page, perPage}) =>{
    const limit = perPage;
    const skip = page > 0 ? (page - 1) * perPage : 0;

    const [savedStories, totalItems] = await Promise.all([
        await SavedArticleCollection.find().limit(limit).skip(skip).exec(),
        SavedArticleCollection.countDocuments()
    ])

    const totalPages = Math.ceil(totalItems / perPage);
    




    return{
        data: savedStories,
        page: page,
        perPage: perPage,
        totalItems: totalItems,
        totalPages :totalPages,
        hasNextPage: totalItems > 1,
        hasPreviousPage: page > 1
    }
}



export const createStory = async (payload, userId) =>{

    const category = await CategoriesCollection.find({name: payload.category})


    const newStory = await TravelersCollection.create({
        img: payload.img,
        title: payload.title,
        article: payload.article,
        category: category._id,
        ownerId: userId,
        date: payload.date,

    });


    return newStory;
}

export const getStoryById = async (id) =>{
    const story = await TravelersCollection.findById({_id: id});

    if(!story){
        throw createHttpError(404, 'Not found')
    }


    return story;
}




export const addSavedStory = async (userId, storyId) =>{
    const savedStory = await SavedArticleCollection.create({
        userId,
        storyId
    })



    return savedStory;
}




export const deleteSavedStory = async (userId) =>{
    const savedStory = await SavedArticleCollection.deleteOne({
        userId: userId
    })



    return savedStory;
}



export const updateStory = async (userId, storyId, payload) =>{
    const story = await StoriesCollection.findOneAndUpdate(
        {_id: storyId, ownerId :userId},
        payload,
        {update: true}
    )



    return story;
}
