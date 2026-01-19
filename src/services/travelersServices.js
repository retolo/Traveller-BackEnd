import { TravelersCollection } from "../db/models/travelers.js";
import createHttpError from "http-errors";
import { UserCollection } from "../db/models/users.js";


export const getTravelers = async ({page, perPage}) =>{
    const limit = perPage;
    const skip = page > 0 ? (page - 1) * perPage : 0;

    const [travelers, totalItems] = await Promise.all([
        await UserCollection.find().limit(limit).skip(skip).exec(),
        UserCollection.countDocuments()
    ])
    
    const totalPages = Math.ceil(totalItems / perPage);
    



    return{
        data: travelers,
        page: page,
        perPage: perPage,
        totalItems: totalItems,
        totalPages: totalPages,
        hasNextPage: totalItems > 1,
        hasPreviousPage: page > 1
    }
}




export const getTravelersById = async (id) =>{
    const traveler  = await UserCollection.findById({_id: id});

    if(!traveler){
        throw createHttpError(404, 'Not Found');
    }
    

    const stories = await TravelersCollection.find({ownerId: id})
    console.log(stories, id);


    return {
        traveler,
        stories
    }

}




export const updateAvatarUser = async (userId, avatar) =>{
    const user = await UserCollection.findOneAndUpdate(
        {_id: userId},
        avatar,
        {update: true}
    );


    return user;
}


export const updateDataUser = async (userId, payload) =>{
    const user = await UserCollection.findOneAndUpdate(
        {_id: userId},
        payload,
        {update: true}
    );


    return user;
}


