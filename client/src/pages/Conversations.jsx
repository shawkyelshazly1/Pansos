import React from "react";
import ChatsContainer from "../components/conversations/leftMenu/ChatsContainer";
import ChatContainer from "../components/conversations/main/ChatContainer";

export default function Conversations() {
	return (
		<div className="flex flex-row w-full h-full justify-between gap-6 pb-6">
			<div className="w-full  flex flex-row gap-6">
				<ChatsContainer />
				<ChatContainer />
			</div>
		</div>
	);
}
