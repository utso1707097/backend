import mongoose from "mongoose";
import { config } from "./config";


const connectDB = async() => {
    try {
        mongoose.connection.on(
            'connected',()=>{
                console.log("Connected to database Successfully");
            }
        );
        mongoose.connection.on('error',(error)=>{
            console.log("Error in connecting to database", error);
        });
        
        await mongoose.connect(config.databaseUrl as string);
    } catch (error) {
        console.error("Failed to connect to database",error);
        process.exit(1); // without database what can do server singly
    }
}

export default connectDB;