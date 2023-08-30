import mongoose from "mongoose";
import "dotenv/config";

const getMongoDBConnection = async (): Promise<void> => {
    const uri = <string>process.env.MONGO_URI;
    await mongoose.connect(uri);
    console.log("MongoDB running");
}

export default getMongoDBConnection;