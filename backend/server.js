import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js"
import connectMongoDB from "./db/mongodb.js";
const app = express();
dotenv.config()

const PORT = process.env.PORT || 5001

app.get("/", (req, res) => {
    // root route http://localhost:5000/
    res.send("hello");
})

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
    connectMongoDB();
    console.log("Server running on port 5001"); 
});