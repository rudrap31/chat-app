import Conversation from "../models/conversation.js";
import Message from "../models/message.js";

export const sendMessage = async (req, res) => {
    try {
        const { message } = req.body;
        const { id: receiverID } = req.params;
        const senderID = req.user._id;

        let conversation = await Conversation.findOne({
            participants: { $all: [senderID, receiverID] },
    })

    if(!conversation){
        conversation = await Conversation.create({
            participants: [senderID, receiverID],
        });
    }

    const newMessage = new Message({
        senderID,
        receiverID,
        message,
    });

    if(newMessage){
        conversation.messages.push(newMessage._id);
    }

    await conversation.save();
    await newMessage.save();

    res.status(201).json(newMessage);

    } catch (error) {
        console.log("Error in sendMessage controller: ", error.message);
        res.status(500).json({ error:"Internal server error"})
    }
}

export const getMessage = async (req, res) => {
    try {

        const {id: ChattingWithID} = req.params;
        const senderID = req.user._id;

        const conversation = await Conversation.findOne({
            participants: { $all: [senderID, ChattingWithID] }
        }).populate("messages");

        if(!conversation) return res.status(200).json([]);

        res.status(200).json(conversation.messages);

    } catch (error) {
        console.log("Error in getMessage controller: ", error.message);
        res.status(500).json({ error:"Internal server error"})
    }
}