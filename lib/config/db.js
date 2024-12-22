import mongoose from "mongoose";

export const connectDb = async () => {
    await mongoose.connect("mongodb+srv://huymindhack:Truonggia5@cluster0.6qvgr.mongodb.net/")
    console.log("DB connected")
}