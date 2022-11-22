import React, { useContext, useEffect } from "react";
import ChatsContainer from "../components/conversations/leftMenu/ChatsContainer";
import ChatContainer from "../components/conversations/main/ChatContainer";
import { ChatAppContext } from "../contexts/ChatContext";

export default function Conversations() {
	const { setSelectedConversation } = useContext(ChatAppContext);

	useEffect(() => {
		return () => {
			setSelectedConversation(null);
		};
	}, []);

	return (
		<div className="flex flex-row w-full h-full justify-between  pb-6">
			<div className="w-full flex flex-row gap-2">
				<ChatsContainer />
				<ChatContainer />
			</div>
		</div>
	);
}
