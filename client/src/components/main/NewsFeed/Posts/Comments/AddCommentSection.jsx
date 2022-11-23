import { useApolloClient, useMutation } from "@apollo/client";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { currentUserContext } from "../../../../../contexts/CurrentUserContext";
import { ADD_COMMENT } from "../../../../../graphql/comment/mutation";
import { LOAD_POST_COMMENTS } from "../../../../../graphql/comment/query";

export default function AddCommentSection({ postId }) {
	const [content, setcontent] = useState("");
	const { currentUser } = useContext(currentUserContext);

	// add comment mutation
	const [addComment] = useMutation(ADD_COMMENT, {
		variables: { postId, content, postType: "Post" },
		update: (cache, { data }) => {
			cache.modify({
				fields: {
					loadPostComments(existingComments = []) {
						const { post, ...newComment } = data.addComment;
						cache.writeQuery({
							query: LOAD_POST_COMMENTS,
							data: { newComment, ...existingComments },
						});
					},
				},
			});
		},
	});

	return (
		<div className="flex flex-1 flex-row gap-4 items-center ">
			<Link to={`/profile/${currentUser.id}`}>
				<img
					className="w-10 h-10 rounded-lg "
					src={currentUser.profileImage.url}
					alt=""
				/>
			</Link>
			<input
				type="text"
				className="focus:outline-none bg-bgColor w-full rounded-lg px-6 py-2"
				placeholder="Add comment ..."
				value={content}
				onChange={(e) => {
					setcontent(e.target.value);
				}}
				onKeyDown={(e) => {
					if (e.key === "Enter" && content.trim() !== "") {
						addComment();
						setcontent("");
					}
				}}
			/>
		</div>
	);
}
