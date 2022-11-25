import { useMutation } from "@apollo/client";
import { Player } from "@lottiefiles/react-lottie-player";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { AiFillHeart, AiFillMessage } from "react-icons/ai";
import { FaShareSquare } from "react-icons/fa";
import {
	LIKE_OR_UNLIKE_POST,
	SHARE_POST,
} from "../../../../graphql/post/mutation";
import { currentUserContext } from "../../../../contexts/CurrentUserContext";
import PostShareOptions from "./PostShareOptions";
import { CurrentAppContext } from "../../../../contexts/AppContext";

export default function PostStats({
	toggleCommentsModal,
	isOpened,
	post,
	selectPost,
}) {
	const { currentUser } = useContext(currentUserContext);

	const { selectedGroup } = useContext(CurrentAppContext);

	// like or unlike post mutation
	const [likeOrUnlikePost] = useMutation(LIKE_OR_UNLIKE_POST, {
		variables: {
			postId: post.id,
			postType: post.is_shared ? "SharedPost" : "Post",
		},
		onError: (_) => {
			toast.error("Something went wrong!");
		},
	});

	return (
		<div className="flex flex-row gap-6 items-center cursor-pointer">
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
			<div
				className="flex flex-row gap-1 items-center cursor-pointer"
				onClick={() => {
					toggleCommentsModal(!isOpened);
					selectPost();
				}}
			>
				<AiFillMessage className="text-secondaryColor" size={25} />
				{post.commentsCount}
			</div>

			{currentUser.id !== post.author?.id && selectedGroup === "" ? (
				<div className="flex flex-col gap-1 items-center cursor-pointer justify-center w-full">
					<PostShareOptions post={post} />
				</div>
			) : (
				<></>
			)}
		</div>
	);
}
