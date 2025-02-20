import React, { useEffect, useRef } from 'react'
import Message from "./Message";
import useGetMessages from '../../hooks/useGetMessages';

const Messages = () => {
    const { messages, loading } = useGetMessages();
    const lastMessageRef = useRef();

    useEffect(() => {
        setTimeout(() => {
            lastMessageRef.current?.scrollIntoView({ behavior: "smooth"})
        }, 100);

    }, [messages])
    return (
        <div className='px-4 flex-1 overflow-auto'>
            {!loading && messages.length > 0 && messages.map((message) => (
                <div key={message._id}
                    ref={lastMessageRef}>
                    <Message message={message} />
                </div>
            ))}



            {loading && <>
                <div className='flex gap-3 items-center'>
                    <div className='skeleton w-10 h-10 rounded-full shrink-0'></div>
                    <div className='flex flex-col gap-1'>
                        <div className='skeleton h-4 w-40'></div>
                        <div className='skeleton h-4 w-40'></div>
                    </div>
                </div>
                <div className='flex gap-3 items-center justify-end'>
                    <div className='flex flex-col gap-1'>
                        <div className='skeleton h-4 w-40'></div>
                    </div>
                    <div className='skeleton w-10 h-10 rounded-full shrink-0'></div>
                </div>
            </>}
            {!loading && messages.length === 0 &&
                <p className='text-center font-semibold p-5'>Send a message to start the conversation</p>
            }


        </div>
    );
};
export default Messages;