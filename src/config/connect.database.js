import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const mongoDbURI = process.env.MONGODB_URI;
async function connectDatabase(){
    try {
        await mongoose.connect(mongoDbURI);
        console.log("Successfully connecting to Database...");
    } catch (error) {
        console.log("Database connectivity error: ",error);
    }
};

export default connectDatabase;
