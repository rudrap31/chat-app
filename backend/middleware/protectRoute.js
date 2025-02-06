import jwt from "jsonwebtoken";
import User from "../models/user.js"

const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;
        if(!token){
            return res.status(401).json({ error: "Unauthorized"});
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if(!decoded){
            return res.status(401).json({ error: "Invalid token"});
        }
        const user = await User.findById(decoded.userID).select("-password");

        if(!user){
            return res.status(401).json({ error: "User not found"});
        }

        req.user = user;
        next()

    } catch (error) {
        console.log("Error in protectRoute: ", error.message);
        res.status(500).json({ error: "Internal server error"});
    }
}

export default protectRoute;