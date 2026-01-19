import { UserCollection } from "../db/models/users.js";
import { SessionCollection } from "../db/models/sessions.js";
import createHttpError from "http-errors";
import bcrypt from 'bcrypt'
import {randomBytes} from 'crypto'
import { FIFTEEN_MINUTES, THIRTY_DAYS } from "../constants/index.js";

export const register = async (payload) =>{
    const user = await UserCollection.findOne({email: payload.email});


    if(user){
        throw createHttpError(409, 'Email in use')
    }

    const encryptedPassword = await bcrypt.hash(payload.password,10)


    return await UserCollection.create({
        name: payload.name,
        email: payload.email,
        password: encryptedPassword
    }
        
    )
}





export const login = async (payload) =>{
    const user = await UserCollection.findOne({email: payload.email});


    if(!user){
        throw createHttpError(404, 'User not found');
    }

    const isEqual = await bcrypt.compare(payload.password, user.password);

    if(!isEqual){
        throw createHttpError(401, 'Unauthorized')
    }


    const accessToken = randomBytes(30).toString('base64');
    const refreshToken = randomBytes(30).toString('base64')


    await SessionCollection.deleteOne({userId: user._id});


    return await SessionCollection.create({
        userId: user._id,
        accessToken: accessToken,
        refreshToken: refreshToken,
        accessTokenValidUntil: new Date(Date.now() + FIFTEEN_MINUTES),
        refreshTokenValidUntil: new Date(Date.now() + THIRTY_DAYS)
    })
}





export const logOut = async (refreshToken) =>{
    await SessionCollection.deleteOne({refreshToken: refreshToken})
}