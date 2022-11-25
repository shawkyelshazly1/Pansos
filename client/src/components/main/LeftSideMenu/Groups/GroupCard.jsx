import React from "react";
import { Link } from "react-router-dom";
import S from "underscore.string";

export default function GroupCard({ group }) {
	return (
		<Link to={`/group/${group.id}`}>
			<div className="flex felx-row gap-3 items-center cursor-pointer">
				<img
					className="w-10 h-10 rounded-lg object-cover"
					src={group.photo.url}
					alt=""
				/>
				<h1 className="text-[#53596d] font-medium">
					{S(group.name).titleize().value()}
				</h1>
			</div>
		</Link>
	);
}
