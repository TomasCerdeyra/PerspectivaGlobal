import mongoose from "mongoose";
import "dotenv/config";

const { NODE_ENV, MONGO_URI, MONGO_URI_DEV } = process.env;

const stringConnection = NODE_ENV === 'development' ? MONGO_URI_DEV : MONGO_URI;

const getMongoDBConnection = async (): Promise<void> => {
    const uri = <string>stringConnection;
    await mongoose.connect(uri);
    if (NODE_ENV === 'development') console.log("MongoDB running in development mode");    
    else console.log("MongoDB running in production");
}

export default getMongoDBConnection;