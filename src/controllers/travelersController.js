import { Query } from "mongoose";
import { getTravelers, getTravelersById, updateAvatarUser, updateDataUser} from "../services/travelersServices.js";

import { parsePaginationParams } from "../utils/parsePaginationParams.js";






export const getTravelersController = async (req, res) =>{
    const {page, perPage} = parsePaginationParams(req.query)
    const travelers = await getTravelers({page, perPage});


    res.json({
        status: 200,
        message: 'Successfully get travelers',
        data: {
            travelers: travelers
        }
    })
}


export const getTravelersByIdController = async (req, res) =>{
    const {travelerId} = req.params
    const traveler = await getTravelersById(travelerId);

    res.json({
        status: 200,
        message: 'Successfully get traveler',
        data: {
            traveler: traveler
        }
    })
}



export const updateAvatarUserController = async (req, res) =>{
    const userId = req.user._id;
    const payload = req.body

    const user = await updateAvatarUser(userId, payload);


    res.json({
        status: 200,
        message: 'Successfully updated avatar',
        data: {
            user: user
        }
    })
}


export const updateDataUserController = async (req, res) =>{
    const userId = req.user._id;
    const payload = req.body
    const user = await updateDataUser(userId, payload)


        res.json({
        status: 200,
        message: 'Successfully updated user data',
        data: {
            user: user
        }
    })
}