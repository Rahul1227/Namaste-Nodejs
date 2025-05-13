import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const MONGO_URI = process.env.MONGO_URI;
export const connectDB = async ()=>{
    try{
        await mongoose.connect(MONGO_URI);
        console.log('Connected to database successfully');
    }catch(err){
        console.log('Error while connecting to database....',err);

    }
}