import { useQuery } from "@apollo/client";
import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { LOAD_USER_CONVERSATIONS } from "../../../graphql/conversation/query";
import ChatCard from "./ChatCard";
import LoadingCircleSpinner from "../../utils/LoadingCircleSpinner";
import { ChatAppContext } from "../../../contexts/ChatContext";
import { useParams } from "react-router";

export default function ChatsContainer() {
	const { userConversations, setUserConversations, setSelectedConversation } =
		useContext(ChatAppContext);
	const { userId } = useParams();

	// load user conversations Query
	const { data, loading } = useQuery(LOAD_USER_CONVERSATIONS, {
		onError: (_) => {
			console.log(_);
			toast.error("Something Went Wrong!");
		},
		onCompleted: (data) => {
			setUserConversations(data.loadUserConversations);
		},
		fetchPolicy: "network-only",
	});

	useEffect(() => {
		setSelectedConversation(userId);
	}, [userId]);

	return (
		<div className="flex bg-white h-full lg:w-[23%] w-fit rounded-xl shadow-postCardShadow lg:p-6">
			<div className="flex flex-col gap-4 w-full">
				<h1 className="text-[#848fac] font-medium hidden lg:block">
					CONVERSATIONS
				</h1>
				<hr className=" hidden lg:block" />
				<div className="flex flex-col gap-4 w-full overflow-y-scroll lg:max-h-[calc(100vh-225px)] max-h-[calc(100vh-170px)]">
					{loading ? (
						<LoadingCircleSpinner />
					) : userConversations.length > 0 ? (
						userConversations.map((conversation) => (
							<ChatCard key={conversation.id} conversation={conversation} />
						))
					) : (
						<h1 className="self-center ">Start Some Conversations.</h1>
					)}
				</div>
			</div>
		</div>
	);
}
