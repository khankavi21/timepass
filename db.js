import mongoose from "mongoose";
import { config } from 'dotenv';
config()
const URI = process.env.DATABASE_URI;

const connectTOMongo = async()=>{
    try{
        const res = await mongoose.connect(URI);
        if(res){
            console.log("Database Connected Successfully")
        }
    }catch(err){
        console.log(err)
    }
}

export default connectTOMongo;


