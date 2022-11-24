import React from "react";
import { Link } from "react-router-dom";
import S from "underscore.string";
import moment from "moment";

export default function FriendCard({ user }) {
	return (
		<div className="flex felx-row gap-3 items-center cursor-pointer justify-between">
			<Link to={`/profile/${user._id}`}>
				<div className="flex flex-row gap-3 items-center">
					<img
						className="w-10 rounded-lg object-cover"
						src={user.profileImage.url}
						alt=""
					/>
					<h1 className="text-[#53596d] font-medium">
						{S(user.firstName + " " + user.lastName)
							.titleize()
							.value()}
					</h1>
				</div>
			</Link>
			{user.status === "online" ? (
				<span className="bg-[#27ae60] w-[10px] h-[10px] rounded-full"></span>
			) : (
				<p className="text-xs text-[#53596d] font-medium">
					{moment(user.lastSeen).fromNow(true)}
				</p>
			)}
		</div>
	);
}
