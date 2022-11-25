import numeral from "numeral";
import React from "react";
import { Link } from "react-router-dom";
import S from "underscore.string";
import { MdPublic } from "react-icons/md";
import { RiGitRepositoryPrivateFill } from "react-icons/ri";
import JoinGroupButton from "./JoinGroupButton";

export default function GroupExploreCard({ group }) {


	return (
		<div className="flex flex-col gap-4 bg-white px-6 py-8 rounded-xl shadow-postCardShadow items-center">
			<Link
				to={`/group/${group.id}`}
				className="flex flex-col items-center gap-4 w-full"
			>
				<img
					className="w-36 h-36 object-cover rounded-xl"
					src={group.photo.url}
					alt=""
				/>
				<h1 className="font-medium text-xl ">
					{S(group.name).titleize().value()}
				</h1>
			</Link>
			<div className="flex flex-col px-10  items-center gap-3">
				<div className="flex flex-col items-center">
					<h1 className="text-2xl font-semibold text-[#192252]">
						{numeral(group.groupMembersCount).format("0a")}
					</h1>
					<h1 className="text-lg  text-[#848fac]">Members</h1>
				</div>
				<p className="flex flex-row gap-1 items-center justify-center text-[#848fac]">
					{group.groupType === "public" ? (
						<MdPublic size={15} />
					) : (
						<RiGitRepositoryPrivateFill size={15} />
					)}{" "}
					{group.groupType}
				</p>
			</div>
			<JoinGroupButton group={group} />
		</div>
	);
}
