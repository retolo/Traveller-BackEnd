import cors from 'cors';
import express from 'express'
import cookieParser from 'cookie-parser';
import { getEnvVar } from './utils/getEnvVar.js';

const PORT = getEnvVar('PORT');
export const startServer = () =>{

    const app = express();


    app.use(cors());
    app.use(cookieParser());
    app.use(express.json())



    app.listen(PORT, () =>{
        console.log(`Server is running on port ${PORT}`)
    })

}