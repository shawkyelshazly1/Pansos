import React, { useContext } from "react";
import { currentUserContext } from "../../../contexts/CurrentUserContext";
import MessageCardLeft from "./MessageCardLeft";
import MessageCardRight from "./MessageCardRight";

export default function MessagesContainer({ messages }) {
	const { currentUser } = useContext(currentUserContext);

	return (
		<div className="flex flex-1 flex-col-reverse gap-6 overflow-y-scroll  max-h-[calc(100vh-310px)]">
			{messages.map((message) =>
				message.author.id === currentUser.id ? (
					<MessageCardLeft key={message.id} message={message} />
				) : (
					<MessageCardRight key={message.id} message={message} />
				)
			)}
		</div>
	);
}
