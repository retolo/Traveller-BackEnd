import { startServer } from "./server.js";
import { initMongoDb } from "./db/initMongoDb.js";


const initServer = async () =>{
    await initMongoDb();
    startServer()
}


initServer();