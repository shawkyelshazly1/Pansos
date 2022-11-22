import { useLazyQuery, useQuery } from "@apollo/client";
import React, { useContext, useEffect } from "react";
import toast from "react-hot-toast";
import { useLocation, useNavigate, useParams } from "react-router";
import { LOAD_SINGLE_CONVERSATION } from "../../../graphql/conversation/query";
import { LOAD_USER_MINIMAL } from "../../../graphql/user/query";
import ChatInput from "./ChatInput";
import MessagesContainer from "./MessagesContainer";
import { currentUserContext } from "../../../contexts/CurrentUserContext";

import ChatContainerHeader from "./chatContainer/ChatContainerHeader";
import { LOAD_CONVERSATION_MESSAGES } from "../../../graphql/message/query";
import { registerEvents } from "../../../socketIo/events";
import { CurrentAppContext } from "../../../contexts/AppContext";

export default function ChatContainer() {
	const { userId } = useParams();
	const navigate = useNavigate();

	const { currentUser } = useContext(currentUserContext);

	useEffect(() => {
		refetch();
	}, [userId]);

	// load conversation messages on ID change
	const { data, loading, refetch } = useQuery(LOAD_SINGLE_CONVERSATION, {
		variables: { userId },
		skip: !userId,
		onError: (error) => {
			if (!error.message === "Conversation not found!") {
				console.log("here");
				toast.error("Something Went Wrong!");
			} else {
				// load user if no conversation found
				loadUser({
					variables: { userId },
					onError: (_) => {
						navigate("/message");
					},
					onCompleted: (data) => {
						if (!data?.loadUser) {
							navigate("/message");
						}
					},
				});
			}
		},
		onCompleted: ({ loadSingleConversation }) => {
			// load conversation messages if found
			loadConversationMessages({
				variables: { conversationId: loadSingleConversation.id },
				fetchPolicy: "cache-and-network",
			});
		},
	});

	// load user if no conversation found
	const [loadUser, { data: loadedUser, loading: loadingUser }] =
		useLazyQuery(LOAD_USER_MINIMAL);

	// load conversation messages if conversation found
	const [
		loadConversationMessages,
		{ data: conversationMessages, loading: loadingConversationMessages },
	] = useLazyQuery(LOAD_CONVERSATION_MESSAGES);

	const otherParticipant = data?.loadSingleConversation.users.filter(
		(user) => user.id !== currentUser.id
	)[0];

	return (
		<div className="flex flex-1 flex-col gap-4 bg-white shadow-postCardShadow h-full rounded-xl p-6">
			{!userId ? (
				<div className="h-full w-full  flex items-center justify-center">
					<h1 className="text-2xl font-medium ">
						Select a chat or start a new conversation
					</h1>
				</div>
			) : (
				<>
					{/* chat container header to display the other participant info */}
					<ChatContainerHeader
						loadedUser={loadedUser}
						otherParticipant={otherParticipant}
					/>
					<hr />
					<div className="flex flex-col justify-between gap-2 h-full">
						<MessagesContainer
							messages={conversationMessages?.loadConversationMessages || []}
						/>
						<ChatInput recipient={otherParticipant || loadedUser?.loadUser} />
					</div>
				</>
			)}
		</div>
	);
}
