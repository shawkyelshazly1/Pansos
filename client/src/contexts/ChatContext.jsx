import { useApolloClient, useLazyQuery } from "@apollo/client";
import { createContext, useContext, useEffect, useState } from "react";
import {
	LOAD_SINGLE_CONVERSATION,
	LOAD_UNCREADcONVERSATIONS_COUNT,
} from "../graphql/conversation/query";
import { connectSocketIo } from "../socketIo/connection";
import socket from "../socketIo/socket";
import { adjustMessageObjectIdFields, showMessageNotification } from "../utils";
import { currentUserContext } from "./CurrentUserContext";
export const ChatAppContext = createContext(null);

export const ChatAppProvier = ({ children }) => {
	const [IOsocket, setIOSocket] = useState(socket);
	const [loadedConversationMessages, setLoadedConversationMessages] = useState(
		[]
	);
	const [userConversations, setUserConversations] = useState([]);
	const [mockConversations, setMockConversations] = useState([]);
	const [selectedConversation, setSelectedConversation] = useState(null);
	const [unreadConversationsCount, setUnreadConversationsCount] = useState(0);
	const [onlineUsers, setOnlineUsers] = useState([]);
	const { currentUser } = useContext(currentUserContext);

	const client = useApolloClient();

	// use effect to connect to socket IO
	useEffect(() => {
		connectSocketIo(currentUser?.id);

		// clear connections on destroy
		return () => {
			socket.disconnect();
		};
	}, [IOsocket, currentUser]);

	// use effect to listen to online users event
	useEffect(() => {
		IOsocket.off("online-users").on("online-users", (data) => {
			setOnlineUsers(data);
		});
	});

	useEffect(() => {
		// load unread conversations count
		loadUnreadConversationsCount();
	}, []);

	// attache new Message handler
	const addNewMessage = (messageData) => {
		// update message returned IDs fields
		let newMessage = adjustMessageObjectIdFields(messageData);

		// update the message on UI
		const newMessages = [newMessage, ...loadedConversationMessages];
		setLoadedConversationMessages([...newMessages]);

		// update conversations' last Message
		updateLastMessage(newMessage);
	};

	const [loadUnreadConversationsCount] = useLazyQuery(
		LOAD_UNCREADcONVERSATIONS_COUNT,
		{
			variables: { userId: currentUser?.id },
			onCompleted: ({ loadUnreadConversationsCount }) => {
				setUnreadConversationsCount(loadUnreadConversationsCount);
			},
		}
	);

	// mark conversation messages as read
	const markConversationAsRead = (conversationId) => {
		let updatedConversation = userConversations.filter(
			(conversation) => conversation.id === conversationId
		)[0];

		updatedConversation = {
			...updatedConversation,
			unreadMessagesCount: 0,
		};

		let updatedUserConversations = userConversations.map((conversation) =>
			conversation.id !== updatedConversation.id
				? conversation
				: updatedConversation
		);

		setUserConversations(updatedUserConversations);
		setUnreadConversationsCount(unreadConversationsCount - 1);
	};

	// update last message while in conversation
	const updateLastMessage = (newMsg, unreadMessages = 0) => {
		if (userConversations.length < 1) {
			if (!mockConversations.includes(newMsg.conversation._id)) {
				setMockConversations([...mockConversations, newMsg.conversation._id]);
				setUnreadConversationsCount(unreadConversationsCount + 1);
			}
		} else {
			let updatedConversation = userConversations.filter(
				(conversation) => conversation.id === newMsg.conversation.id
			)[0];

			updatedConversation = {
				...updatedConversation,
				lastMessage: {
					...updatedConversation.lastMessage,
					content: newMsg.content,
					author: newMsg.author,
					createdAt: newMsg.createdAt,
				},
				unreadMessagesCount:
					updatedConversation.unreadMessagesCount + unreadMessages,
			};

			let updatedUserConversations = userConversations.filter(
				(conversation) => conversation.id !== updatedConversation.id
			);
			setUserConversations([updatedConversation, ...updatedUserConversations]);
			updateUnreadConversationsCount([
				updatedConversation,
				...updatedUserConversations,
			]);
		}
	};

	// update unreadConversations count
	const updateUnreadConversationsCount = (userConversations) => {
		const count = userConversations.filter(
			(conversation) => conversation.unreadMessagesCount > 0
		).length;

		setUnreadConversationsCount(count);
	};

	// use effect for messages
	useEffect(() => {
		IOsocket.off("new_msg").on("new_msg", (messageData) => {
			if (
				messageData.conversation.users.some(
					(user) => user._id.toString() === selectedConversation
				)
			) {
				addNewMessage(messageData);
			} else if (selectedConversation) {
				// update message returned IDs fields
				let newMessage = adjustMessageObjectIdFields(messageData);
				// update last message and unread count for conversation
				if (
					messageData.conversation.users.some(
						(user) => user._id.toString() === selectedConversation
					)
				) {
					// update conversations' last Message
					updateLastMessage(newMessage);
				} else {
					updateLastMessage(newMessage, 1);
				}
			} else {
				setUnreadConversationsCount(unreadConversationsCount + 1);
				// update message returned IDs fields
				let newMessage = adjustMessageObjectIdFields(messageData);
				IOsocket.emit("msg_not_recieved", {
					conversationId: newMessage.conversation.id,
					messageId: newMessage.id,
				});
				updateLastMessage(newMessage, 1);
			}

			// shot notification if in differnet chat or not in chats page
			if (
				messageData.author._id !== currentUser.id &&
				selectedConversation !== messageData.author._id
			) {
				showMessageNotification(messageData);
				client.refetchQueries({
					include: [LOAD_SINGLE_CONVERSATION],
				});
			}
		});
	});

	const stateValues = {
		IOsocket,
		loadedConversationMessages,
		setLoadedConversationMessages,
		addNewMessage,
		userConversations,
		setUserConversations,
		selectedConversation,
		setSelectedConversation,
		markConversationAsRead,
		unreadConversationsCount,
		setOnlineUsers,
		onlineUsers,
	};

	return (
		<ChatAppContext.Provider value={stateValues}>
			{children}
		</ChatAppContext.Provider>
	);
};
