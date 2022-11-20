import React from "react";
import { Link } from "react-router-dom";
import S from "underscore.string";

export default function SearchResultCard({ user, toggleModal }) {
	return (
		<Link
			to={`/profile/${user.id}`}
			onClick={() => {
				toggleModal(false);
			}}
		>
			<div className="flex flex-row gap-4 items-center">
				<div className="w-12">
					<img
						className="rounded-xl object-cover"
						src={user.profileImage}
						alt=""
					/>
				</div>
				<h1 className="font-medium pt-2">
					{S(user.firstName + " " + user.lastName)
						.titleize()
						.value()}
				</h1>
			</div>
		</Link>
	);
}
