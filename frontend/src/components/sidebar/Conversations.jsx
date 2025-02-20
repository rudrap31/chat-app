import Conversation from "./Conversation";
import React from 'react'
import useGetConversations from "../../hooks/useGetConversations.js";

const Conversations = () => {
    const { loading, conversations } = useGetConversations();
    console.log(conversations)
    return (
        <div className='py-2 flex flex-col overflow-auto'>
            {conversations.map((conversation, idx) => (
                <Conversation
                    key={conversation._id}
                    conversation={conversation}
                    lastIdx={idx === conversation.length - 1}
                />
            ))}
            {loading ? <span className="loading loading-infinity mx-auto"></span> : null}
        </div>
    );
};
export default Conversations;