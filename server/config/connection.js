import mongoose from "mongoose";
import { config } from "dotenv";

config({
    path: '../../env'
  });

const connectDB = async () => {
    try {
console.log("mongo uri is:" + process.env.MONGODB_URI)
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true, 
            useUnifiedTopology: true,
        });
        console.log(`💻 Connected to MongoDB`);
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }finally{
        console.log("finally mongo uri is:" + process.env.MONGODB_URI)
    }
};

export default connectDB;