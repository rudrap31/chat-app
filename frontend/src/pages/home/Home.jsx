import React from 'react'
import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
	return (
		<div className='bg-base-100 flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-clip-padding'>
			<Sidebar />
			<MessageContainer />
		</div>
	);
};
export default Home;
