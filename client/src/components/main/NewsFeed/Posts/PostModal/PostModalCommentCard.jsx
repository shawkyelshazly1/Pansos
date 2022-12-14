import moment from "moment";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { currentUserContext } from "../../../../../contexts/CurrentUserContext";
import CommentOptionsMenu from "../Comments/CommentOptionsMenu";

export default function PostModalCommentCard({ comment }) {
	const { currentUser } = useContext(currentUserContext);

	return (
		<div key={comment.id} className="flex flex-row gap-2">
			<Link className="" to={`/profile/${comment.author.id}`}>
				<img
					className="w-12 h-12 rounded-full object-cover "
					src={comment.author.profileImage.url}
					alt=""
				/>
			</Link>

			<div className="flex flex-col gap-1 ">
				<p className="bg-[#f0f2f5] rounded-xl py-2 px-4">{comment.content}</p>
				<p className="text-sm pl-4 text-gray-400">
					{moment(comment.createdAt).fromNow(true)}
				</p>
			</div>
			{currentUser.id === comment.author.id ? (
				<CommentOptionsMenu commentId={comment.id} />
			) : (
				""
			)}
		</div>
	);
}
