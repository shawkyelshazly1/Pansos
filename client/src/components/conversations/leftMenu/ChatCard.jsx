import React, { useContext } from "react";
import { useParams } from "react-router";
import { currentUserContext } from "../../../contexts/CurrentUserContext";
import S from "underscore.string";
import moment from "moment";
import { Link } from "react-router-dom";

export default function ChatCard({ conversation }) {
	const { currentUser } = useContext(currentUserContext);

	const { userId } = useParams();

	let otherParticipant = conversation.users.filter(
		(user) => user.id !== currentUser.id
	);

	return (
		<Link to={`/message/${otherParticipant.id}`}>
			<div
				className={`flex flex-row gap-3 cursor-pointer ${
					otherParticipant.id === userId ? "bg-[#e2e5f5]" : ""
				} py-2 lg:px-3 rounded-xl px-2 `}
			>
				<img
					className="max-w-[4rem] max-h-[4rem] rounded-full object-cover"
					src={otherParticipant.profileImage}
					alt=""
				/>
				<div className="lg:flex flex-col gap-1 pt-2 hidden ">
					<h1 className="font-bold">
						{S(otherParticipant.firstName + " " + otherParticipant.lastName)
							.titleize()
							.value()}
					</h1>
					<div className="flex flex-row justify-between items-center gap-2">
						{conversation.lastMessage.author.id === currentUser.id ? (
							<p className="text-sm">You: {conversation.lastMessage.content}</p>
						) : (
							<p className="text-sm">
								{S(otherParticipant.firstName).capitalize().value() +
									": " +
									conversation.lastMessage.content}
							</p>
						)}

						<span className="text-sm">
							{moment(conversation.lastMessage.createdAt).fromNow()}
						</span>
					</div>
				</div>
			</div>
		</Link>
	);
}
