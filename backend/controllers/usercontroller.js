import User from "../models/user.js";

export const getUsers = async (req, res) => {
    try {
        const loggedinUserID = req.user._id;

        const allUsers = await User.find({ _id: { $ne: loggedinUserID}}).select("-password");

        return res.status(200).json(allUsers);

    } catch (error) {
        console.log("Error in getUsers: ", error)
        return res.status(500).json({error: "Internal server error"});
    }
}