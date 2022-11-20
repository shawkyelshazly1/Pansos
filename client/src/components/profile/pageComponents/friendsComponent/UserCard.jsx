import React, { useContext } from "react";
import UserCardMenu from "./UserCardMenu";
import { currentUserContext } from "../../../../contexts/CurrentUserContext";
import S from "underscore.string";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

export default function UserCard({ user }) {
	const { userId } = useParams();
	const { currentUser } = useContext(currentUserContext);

	return (
		<div className="flex flex-row gap-4 justify-between border-[1px] rounded-lg p-2">
			<Link to={`/profile/${user.id}`}>
				<div className="flex flex-row gap-4">
					<img className="w-24 rounded-lg" src={user.profileImage} alt="" />
					<h1 className="text-lg text-[#192252] mt-2 font-semibold hover:text-mainColor">
						{S(user.firstName + " " + user.lastName)
							.titleize()
							.value()}
					</h1>
				</div>
			</Link>
			{currentUser.id === userId ? <UserCardMenu user={user} /> : ""}
		</div>
	);
}
