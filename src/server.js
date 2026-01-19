import cors from 'cors';
import express from 'express'
import cookieParser from 'cookie-parser';
import { getEnvVar } from './utils/getEnvVar.js';
import router from './routers/index.js';
const PORT = getEnvVar('PORT');
export const startServer = () =>{

    const app = express();

    app.use(express.json())
    app.use(cors());
    app.use(cookieParser());
    


    app.use(router)


    app.get('/', (req, res) =>{
        res.json({
            message: "Hello travellers back"
        })
    })



    app.listen(PORT, () =>{
        console.log(`Server is running on port ${PORT}`)
    })

}