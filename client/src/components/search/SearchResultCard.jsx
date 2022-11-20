import numeral from "numeral";
import React from "react";
import FollowButton from "../profile/FollowButton";
import S from "underscore.string";
import { Link } from "react-router-dom";

export default function SearchResultCard({ user }) {
	return (
		<div className="flex flex-col gap-8 bg-white px-6 py-8 rounded-xl shadow-postCardShadow items-center">
			<Link
				to={`/profile/${user.id}`}
				className="flex flex-col items-center gap-4 w-full"
			>
				<img
					className="w-40 object-cover rounded-xl"
					src={user.profileImage}
					alt=""
				/>
				<h1 className="font-medium text-xl ">
					{S(user.firstName + " " + user.lastName)
						.titleize()
						.value()}
				</h1>
				<div className="flex flex-row justify-between px-10 w-[85%]">
					<div className="flex flex-col items-center">
						<h1 className="text-2xl font-semibold text-[#192252]">
							{numeral(user.followersCount).format("0a")}
						</h1>
						<h1 className="text-lg  text-[#848fac]">Followers</h1>
					</div>
					<div className="flex flex-col items-center">
						<h1 className="text-2xl font-semibold text-[#192252]">
							{numeral(user.followingsCount).format("0a")}
						</h1>
						<h1 className="text-lg  text-[#848fac]">Following</h1>
					</div>
				</div>
			</Link>
			<FollowButton loadedUser={user} />
		</div>
	);
}
