import mongoose from "mongoose";

const connectMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to mongodb")
    } catch (error) {
        console.log("Error connecting to db", error.message);
    }
};

export default connectMongoDB