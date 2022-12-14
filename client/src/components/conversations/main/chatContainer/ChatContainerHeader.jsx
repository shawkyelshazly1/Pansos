import React from "react";
import { Link } from "react-router-dom";
import S from "underscore.string";
export default function ChatContainerHeader({ loadedUser, otherParticipant }) {
	return (
		<Link to={`/profile/${loadedUser?.loadUser.id || otherParticipant?.id}`}>
			<div className="flex flex-row gap-3 cursor-pointer items-center">
				<img
					className="w-12 h-12 rounded-full"
					src={
						loadedUser?.loadUser
							? loadedUser?.loadUser.profileImage.url
							: otherParticipant?.profileImage.url
					}
					alt=""
				/>
				<div className="flex flex-col gap-1 pt-2 ">
					<h1 className="font-bold">
						{loadedUser?.loadUser
							? S(
									loadedUser?.loadUser.firstName +
										" " +
										loadedUser?.loadUser.lastName
							  )
									.titleize()
									.value()
							: S(
									otherParticipant?.firstName + " " + otherParticipant?.lastName
							  )
									.titleize()
									.value()}
					</h1>
				</div>
			</div>
		</Link>
	);
}
