import React from "react";
import { Link } from "react-router-dom";
import S from "underscore.string";
export default function UserCard({ user }) {
	return (
		<Link to={`/profile/${user.id}`} className="w-fit">
			<div className="flex flex-row gap-2 w-fit">
				<img
					className="rounded-full w-12 h-12"
					src={user.profileImage.url}
					alt=""
				/>
				<div className="flex flex-col gap-2 justify-center">
					<h1 className="font-medium ">
						{S(user.firstName + " " + user.lastName)
							.titleize()
							.value()}
					</h1>
				</div>
			</div>
		</Link>
	);
}
