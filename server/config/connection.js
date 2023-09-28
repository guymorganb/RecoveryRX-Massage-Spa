import mongoose from "mongoose";
import { config } from "dotenv";

config({
    path: '../../.env'
  });

const connectDB = async () => {
    try {
//console.log("mongo uri is:" + process.env.MONGODB_URI)
        await mongoose.connect('mongodb+srv://guymorganb:aFNIQ5lxUCQ062b1@cluster0.xpeybn2.mongodb.net/FinalProject', {
            useNewUrlParser: true, 
            useUnifiedTopology: true,
        });
        console.log(`💻 Connected to MongoDB`);
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
};

export default connectDB;