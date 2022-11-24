import React, { useContext, useEffect, useState } from "react";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { ChatAppContext } from "../../../../contexts/ChatContext";
import FriendCard from "./FriendCard";

export default function FriendsSection() {
	const { IOsocket } = useContext(ChatAppContext);
	const [onlineUsers, setOnlineUsers] = useState([]);

	// use effect to listen to online users event
	useEffect(() => {
		IOsocket.off("online-users").on("online-users", (data) => {
			setOnlineUsers(data);
		});
	});

	return (
		<div className="flex flex-col bg-white rounded-2xl py-6 px-5 gap-6">
			<div className="flex flex-row justify-between items-center">
				<h1 className="text-[#848fac] font-medium">FRIENDS</h1>
				<BiDotsHorizontalRounded size={25} />
			</div>
			<div className="flex flex-col gap-[19px]">
				{onlineUsers.map((user) => (
					<FriendCard key={user._id} user={user} />
				))}
			</div>
		</div>
	);
}
