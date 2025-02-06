import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.js"
import messageRoutes from "./routes/message.js"
import connectMongoDB from "./db/mongodb.js";

const app = express();
const PORT = process.env.PORT || 5001
dotenv.config();

app.use(express.json()); // to parse incoming requests
app.use(cookieParser())

// app.get("/", (req, res) => {
//     // root route http://localhost:5000/
//     res.send("hello");
// })

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);


app.listen(PORT, () => {
    connectMongoDB();
    console.log("Server running on port 5001"); 
});