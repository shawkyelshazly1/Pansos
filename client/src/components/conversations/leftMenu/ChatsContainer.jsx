import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { LOAD_USER_CONVERSATIONS } from "../../../graphql/conversation/query";
import ChatCard from "./ChatCard";
import LoadingCircleSpinner from "../../utils/LoadingCircleSpinner";

export default function ChatsContainer() {
	// load user conversations Query
	const { data, loading } = useQuery(LOAD_USER_CONVERSATIONS, {
		onError: (_) => {
			toast.error("Something Went Wrong!");
		},
	});

	return (
		<div className="flex bg-white h-full lg:min-w-[20%] w-fit rounded-xl shadow-postCardShadow lg:p-6">
			<div className="flex flex-col gap-4 w-full">
				<h1 className="text-[#848fac] font-medium hidden lg:block">
					CONVERSATIONS
				</h1>
				<hr className=" hidden lg:block" />
				<div className="flex flex-col gap-4 w-full overflow-y-scroll lg:max-h-[calc(100vh-225px)] max-h-[calc(100vh-170px)]">
					{loading ? (
						<LoadingCircleSpinner />
					) : data?.loadUserConversations.length > 0 ? (
						data?.loadUserConversations.map((conversation) => (
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
