import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import userRoutes from "./routes/user.js";
import authRoutes from "./routes/auth.js"
import messageRoutes from "./routes/message.js"
import connectMongoDB from "./db/mongodb.js";
import { app, server } from "./socket/socket.js";

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
app.use("/api/users", userRoutes);


server.listen(PORT, () => {
    connectMongoDB();
    console.log("Server running on port 5001"); 
});