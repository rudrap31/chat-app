import User from "../models/user.js"
import bcrypt from "bcryptjs"

export const signup = async (req, res) => {
    try {
        const { fullName, username, password, confirmPassword } = req.body;

        if(password !== confirmPassword){
            return res.status(400).json({ error:"Password do not match" })
        }

        const user = await User.findOne({ username });

        if(user){
            return res.status(400).json({ error:"Username already exists" })
        }

       
        // hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const firstName = fullName.split(" ")[0];
        const lastName = fullName.split(" ")[1];
        const profilePic = `https://avatar.iran.liara.run/username?username=[${firstName}+${lastName}]`
        
        
        const newUser = new User({
            fullName,
            username,
            password: hashedPassword,
            profilePic
        })
        
        if (newUser) { 
            // JWT
            await newUser.save();
            
            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                username: newUser.username,
                profilePic: newUser.profilePic,
            });
        } else{
            res.status(400).json({error: "Invalid user"})
        }

    } catch (error) {
        console.log("Error in signing up")
        res.status(500).json({error: error.message})
    }
}

export const login = (req, res) => {
    res.send("login Route");
}

export const logout = (req, res) => {
    res.send("logout Route");
}