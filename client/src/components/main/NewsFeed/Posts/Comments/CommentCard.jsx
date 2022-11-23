import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CommentOptionsMenu from "./CommentOptionsMenu";
import { currentUserContext } from "../../../../../contexts/CurrentUserContext";
import S from "underscore.string";

export default function CommentCard({ commentData }) {
	const { currentUser } = useContext(currentUserContext);

	return (
		<>
			<div className="flex flex-row gap-2 relative justify-between">
				<div className="flex flex-row gap-2">
					<Link to={`/profile/${commentData.author.id}`}>
						<div className="w-14 h-14">
							<img
								className="w-14 h-14 rounded-xl object-cover "
								src={commentData.author.profileImage.url}
								alt=""
							/>
						</div>
					</Link>
					<div className="flex flex-col gap-1">
						<h1 className="font-semibold text-[#192252]">
							{S(
								commentData.author.firstName + " " + commentData.author.lastName
							)
								.titleize()
								.value()}
						</h1>
						<p className="text-[#848fac]">{commentData.content}</p>
					</div>
				</div>
				{currentUser.id === commentData.author.id ? (
					<CommentOptionsMenu commentId={commentData.id} />
				) : (
					""
				)}
			</div>
			<hr />
		</>
	);
}
