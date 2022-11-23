import { useLazyQuery } from "@apollo/client";

import React, { useEffect } from "react";
import toast from "react-hot-toast";

import { LOAD_POST_COMMENTS } from "../../../../../graphql/comment/query";
import LoadingSpinner from "../../../../utils/LoadingSpinner";
import AddCommentSection from "../Comments/AddCommentSection";
import PostModalCommentCard from "./PostModalCommentCard";

export default function PostModalComments({ post }) {
	// query to load post comments
	const [loadComments, { data, loading }] = useLazyQuery(LOAD_POST_COMMENTS, {
		variables: { postId: post.id },
		onError: (_) => {
			toast.error("Something went wrong!");
		},
	});

	useEffect(() => {
		loadComments();
	}, [post.id]);

	if (loading) return <LoadingSpinner />;

	return (
		<div className="flex flex-col justify-between h-full">
			<div className="flex flex-col gap-4 w-3/4 flex-1 overflow-y-scroll lg:max-h-[calc(100vh-28vh)]">
				{data?.loadPostComments.map((comment) => (
					<PostModalCommentCard key={comment.id} comment={comment} />
				))}
			</div>
			<div className="h-[10%] flex">
				<AddCommentSection post={post} />
			</div>
		</div>
	);
}
