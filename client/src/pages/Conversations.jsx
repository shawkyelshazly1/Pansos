import React from "react";
import ChatsContainer from "../components/conversations/leftMenu/ChatsContainer";
import ChatContainer from "../components/conversations/main/ChatContainer";

export default function Conversations() {
	return (
		<div className="flex flex-row w-full h-full justify-between  pb-6">
			<div className="w-full flex flex-row gap-2">
				<ChatsContainer />
				<ChatContainer />
			</div>
		</div>
	);
}
