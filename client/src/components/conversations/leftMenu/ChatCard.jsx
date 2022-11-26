import React, { useContext } from "react";
import { useParams } from "react-router";
import { currentUserContext } from "../../../contexts/CurrentUserContext";
import S from "underscore.string";
import moment from "moment";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { MARK_MESSAGES_READ } from "../../../graphql/conversation/mutation";
import { ChatAppContext } from "../../../contexts/ChatContext";
import _ from "lodash";

export default function ChatCard({ conversation }) {
	const { currentUser } = useContext(currentUserContext);
	const { markConversationAsRead, onlineUsers } = useContext(ChatAppContext);

	const { userId } = useParams();

	let otherParticipant = conversation.users.filter(
		(user) => user.id !== currentUser.id
	)[0];

	const [markAllAsRead] = useMutation(MARK_MESSAGES_READ, {
		variables: { conversationId: conversation.id || conversation._id },
	});

	return (
		<Link to={`/message/${otherParticipant.id}`}>
			<div
				className={`flex flex-row gap-3 cursor-pointer ${
					otherParticipant.id === userId ? "bg-[#e2e5f5]" : ""
				} py-2 lg:px-3 rounded-xl px-2 relative`}
				onClick={() => {
					if (conversation.unreadMessagesCount > 0) {
						markAllAsRead();
						markConversationAsRead(conversation.id);
					}
				}}
			>
				<div className="relative">
					<img
						className="w-[4rem] h-[4rem]  rounded-full object-cover"
						src={otherParticipant.profileImage.url}
						alt=""
					/>

					{_.find(onlineUsers, {
						userId: otherParticipant.id,
						status: "online",
					}) ? (
						<span className="w-4 h-4 rounded-full bg-green-500 bottom-0 right-[2px] absolute border-2 border-white "></span>
					) : (
						<></>
					)}
				</div>
				<div className="lg:flex flex-col gap-1 pt-2 hidden flex-1">
					<h1 className="font-bold">
						{S(otherParticipant.firstName + " " + otherParticipant.lastName)
							.titleize()
							.value()}
					</h1>
					<div
						className={`flex flex-row justify-between items-center gap-2 ${
							conversation.unreadMessagesCount > 0
								? "text-mainColor font-medium"
								: ""
						}`}
					>
						{conversation.lastMessage.author.id === currentUser.id ? (
							<p className="text-sm">
								You: {S(conversation.lastMessage.content).truncate(20).value()}
							</p>
						) : (
							<p className="text-sm">
								{S(otherParticipant.firstName).capitalize().value() +
									": " +
									S(conversation.lastMessage.content).truncate(20).value()}
							</p>
						)}

						<span className="text-xs">
							{moment(conversation.lastMessage.createdAt).fromNow(true)}
						</span>
					</div>
				</div>
				{conversation.unreadMessagesCount > 0 ? (
					<span className="self-center absolute lg:static  top-1 right-1  rounded-full w-6 h-6  font-medium bg-mainColor text-white items-center justify-center flex">
						{conversation.unreadMessagesCount}
					</span>
				) : (
					<></>
				)}
			</div>
		</Link>
	);
}
