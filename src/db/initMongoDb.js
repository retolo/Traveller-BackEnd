import mongoose from "mongoose";
import { getEnvVar } from "../utils/getEnvVar.js";



export const initMongoDb = async () =>{

    try {
        const pwd = getEnvVar('MONGO_DB_PASSWORD');
        const user = getEnvVar('MONGO_DB_USER');
        const url = getEnvVar('MONGODB_URL');
        const db = getEnvVar('MONGODB_DB');


        await mongoose.connect(
            `mongodb+srv://${user}:${pwd}@${url}/${db}?retryWrites=true&w=majority&appName=Cluster0`
        );
        console.log('MongoDb connection successfully established')

       

        
    } catch (error) {
        console.log('Error while setting up mongo connection', error);
    }
}



