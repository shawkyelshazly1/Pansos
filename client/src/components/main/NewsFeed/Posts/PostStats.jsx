import { useMutation } from "@apollo/client";
import { Player } from "@lottiefiles/react-lottie-player";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { AiFillHeart, AiFillMessage } from "react-icons/ai";
import { FaShareSquare } from "react-icons/fa";
import { LIKE_OR_UNLIKE_POST } from "../../../../graphql/post/mutation";

export default function PostStats({ toggleModal, isOpened, post }) {
	const [triggerAnimation, settriggerAnimation] = useState(true);

	// like or unlike post mutation
	const [likeOrUnlikePost] = useMutation(LIKE_OR_UNLIKE_POST, {
		variables: { postId: post.id },
		onError: (_) => {
			toast.error("Something went wrong!");
		},
	});

	return (
		<div className="flex flex-row gap-6 items-center cursor-pointer">
			<div className="flex flex-row gap-1 items-center">
				{triggerAnimation ? (
					<Player
						autoplay
						loop
						src="https://assets3.lottiefiles.com/packages/lf20_4VYPxJ.json"
						style={{ width: "60px", margin: "0px", padding: "0px" }}
					></Player>
				) : (
					<AiFillHeart
						onClick={() => {
							likeOrUnlikePost();
						}}
						className={`${
							post.isLiked ? "text-[#ff4400]" : "text-secondaryColor"
						}`}
						size={25}
					/>
				)}

				{post.likesCount}
			</div>
			<div
				className="flex flex-row gap-1 items-center cursor-pointer"
				onClick={() => {
					toggleModal(!isOpened);
				}}
			>
				<AiFillMessage className="text-secondaryColor" size={25} />
				{post.commentsCount}
			</div>
			<div className="flex flex-row gap-1 items-center cursor-pointer">
				<FaShareSquare className="text-secondaryColor" size={25} />
			</div>
		</div>
	);
}
