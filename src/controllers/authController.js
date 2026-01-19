import { register, login, logOut } from "../services/authServices.js";
import { FIFTEEN_MINUTES, THIRTY_DAYS } from "../constants/index.js";



export const registerController = async (req, res) =>{
    const user = await register(req.body);


    res.status(201).json({
        status: 201,
        message: 'Successfully register a user',
        data: {
            user: user
        }
    })
}



export const loginController = async (req, res) =>{
    const session = await login(req.body);


    res.cookie('sessionId', session._id, {
        httpOnly: true,
        expires: new Date(Date.now() + FIFTEEN_MINUTES) 
    })


    res.cookie('refreshToken', session.refreshToken, {
        httpOnly: true,
        expires: new Date(Date.now() + THIRTY_DAYS)
    })



    res.status(201).json({
        status: 201,
        message: 'Successfully login a user',
        data: {
            accessToken: session.accessToken,
            refreshToken: session.refreshToken
        }
    })

}


export const logOutController = async (req, res) =>{
    if(req.cookies.refreshToken){
        await logOut(req.cookies.refreshToken)
    };


    res.status(204).send();
}