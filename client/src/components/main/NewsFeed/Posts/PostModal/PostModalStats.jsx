import { useMutation } from "@apollo/client";
import React from "react";
import { AiFillHeart, AiFillMessage } from "react-icons/ai";
import { FaShareSquare } from "react-icons/fa";
import { LIKE_OR_UNLIKE_POST } from "../../../../../graphql/post/mutation";

export default function PostModalStats({ post }) {
	// like or unlike post mutation
	const [likeOrUnlikePost] = useMutation(LIKE_OR_UNLIKE_POST, {
		variables: { postId: post.id },
		onError: (_) => {
			toast.error("Something went wrong!");
		},
	});

	return (
		<div className="py-2 border-y-[1px] border-gray-300">
			<div className="flex flex-row justify-between items-center cursor-pointer w-2/4 mx-auto ">
				<div className="flex flex-row gap-1 items-center">
					<AiFillHeart
						onClick={() => {
							likeOrUnlikePost();
						}}
						className={`${
							post.isLiked ? "text-[#ff4400]" : "text-secondaryColor"
						}`}
						size={25}
					/>
					{post.likesCount}
				</div>
				<div className="flex flex-row gap-1 items-center cursor-pointer">
					<AiFillMessage className="text-secondaryColor" size={25} />
					{post.commentsCount}
				</div>
				<div className="flex flex-row gap-1 items-center cursor-pointer">
					<FaShareSquare className="text-secondaryColor" size={25} />
				</div>
			</div>
		</div>
	);
}
