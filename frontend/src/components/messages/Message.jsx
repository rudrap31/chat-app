import React from 'react'
import { useAuthContext } from '../../context/AuthContext';
import useConversation from '../../zustand/useConversation';

const Message = ({ message }) => {
    const { authUser } = useAuthContext();
    const { selectedConversation } = useConversation();
    const fromMe = message.senderID === authUser._id;
    const chatClass = fromMe? 'chat-end' : 'chat-start';
    const profilePic = fromMe? authUser.profilePic : selectedConversation.profilePic;
    const textColor = fromMe? 'bg-primary' : 'bg-base-300';
    const formattedDate = getTime(message.createdAt)

    function getTime(timestamp){
        const date = new Date(timestamp);

        const hours = String(date.getUTCHours()).padStart(2, "0");
        const minutes = String(date.getUTCMinutes()).padStart(2, "0");
        return `${hours}:${minutes}`
    }

    return <div className={`chat ${chatClass}`}>
        <div className='chat-image avatar'>
            <div className='w-10 rounded-full'>
                <img 
                src = {profilePic}
                alt='Tailwind CSS chat bubble component' />
            </div>
        </div>
        <div className={`chat-bubble text-white ${textColor}`}>{message.message}</div>
        <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>
        {formattedDate}
        </div>
    </div>

}

export default Message;