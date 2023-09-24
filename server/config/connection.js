import mongoose from "mongoose";
import { config } from "dotenv";
config();

const connectDB = async () => {
    try {
console.log("mongo uri is:" + process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/programming-thoughts')
        await mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/recovery-massage-spa', {
            useNewUrlParser: true, 
            useUnifiedTopology: true,
        });
        console.log(`💻 Connected to MongoDB`);
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
};

export default connectDB;