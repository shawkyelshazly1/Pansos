import React, { useState } from "react";
import { AiFillHeart, AiFillMessage } from "react-icons/ai";
import { FaShareSquare } from "react-icons/fa";

export default function PostStats({ toggleModal, isOpened, post }) {
	return (
		<div className="flex flex-row gap-6 items-center cursor-pointer">
			<div className="flex flex-row gap-1 items-center">
				<AiFillHeart
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
