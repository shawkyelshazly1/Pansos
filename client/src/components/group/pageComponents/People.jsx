import numeral from "numeral";
import React from "react";
import { Link } from "react-router-dom";
import S from "underscore.string";
import UserCard from "./UserCard";
export default function People({ group }) {
	return (
		<div className="w-full lg:w-2/4 flex flex-col bg-white rounded-lg shadow-postCardShadow py-4 px-4 gap-4">
			<h1 className="font-medium text-2xl flex flex-row gap-1 items-center text-[#6d727d]">
				PEOPLE
				<p className="">{numeral(group.groupMembersCount).format("0a")}</p>
			</h1>
			<hr className="border-[1px]" />

			<div className="flex flex-col gap-4">
				<h1 className="font-medium flex flex-row gap-1 items-center justi">
					Administrators -
					<p className="text-[#6d727d]">
						{numeral(group.administrators.length).format("0a")}
					</p>
				</h1>
				<div className="flex flex-col gap-2">
					{group.administrators.map((admin) => (
						<UserCard key={admin.id} user={admin} />
					))}
				</div>
			</div>
			<hr className="border-[1px]" />
			<div className="flex flex-col gap-2">
				<h1 className="font-medium flex flex-row gap-1 items-center justi">
					Members -
					<p className="text-[#6d727d]">
						{numeral(group.groupMembersCount).format("0a")}
					</p>
				</h1>
				<div className="flex flex-col gap-2">
					{group.members.map((member) => (
						<UserCard key={member.id} user={member} />
					))}
				</div>
			</div>
		</div>
	);
}
