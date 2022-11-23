import { useApolloClient } from "@apollo/client";
import React, { useContext, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import { CurrentAppContext } from "../../../contexts/AppContext";
import { ChatAppContext } from "../../../contexts/ChatContext";
import { currentUserContext } from "../../../contexts/CurrentUserContext";
import { LOAD_CONVERSATION_MESSAGES } from "../../../graphql/message/query";
import MessageCardLeft from "./MessageCardLeft";
import MessageCardRight from "./MessageCardRight";

export default function MessagesContainer({ messages }) {
	const { currentUser } = useContext(currentUserContext);

	const { userId } = useParams();
	const { loadedConversationMessages, setLoadedConversationMessages } =
		useContext(ChatAppContext);

	useEffect(() => {
		setLoadedConversationMessages([...messages]);
	}, [messages]);

	return (
		<div className="flex flex-1 flex-col-reverse gap-6 overflow-y-scroll  max-h-[calc(100vh-310px)]">
			{loadedConversationMessages.map((message) =>
				message.author.id !== currentUser.id ? (
					<MessageCardLeft key={message.id} message={message} />
				) : (
					<MessageCardRight key={message.id} message={message} />
				)
			)}
		</div>
	);
}
