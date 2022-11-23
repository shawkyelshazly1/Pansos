import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AddCommentSection from "./Comments/AddCommentSection";
import PostMediaCollage from "./Media/PostMediaCollage";
import PostStats from "./PostStats";
import S from "underscore.string";
import moment from "moment";
import { currentUserContext } from "../../../../contexts/CurrentUserContext";
import PostOptionsMenu from "./PostOptionsMenu";

import { CurrentAppContext } from "../../../../contexts/AppContext";

export default function InnerPostShared({
	isOpened,
	toggleCommentsModal,
	togglePostModal,
	post,
}) {
	const { currentUser } = useContext(currentUserContext);
	const { setSelectedPost } = useContext(CurrentAppContext);

	const selectPost = () => {
		setSelectedPost(post);
	};

	return (
		<div className="flex flex-col gap-4 bg-white  rounded-2xl py-6 px-5 shadow-postCardShadow border-[1px]">
			<div className="flex flex-row items-center justify-between w-full">
				<Link to={`/profile/${post.post.author.id}`}>
					<div className="flex flex-row  gap-4">
						<img
							className="w-16 h-16 rounded-lg object-cover "
							src={post.post.author.profileImage.url}
							alt=""
						/>
						<h1 className="font-medium pt-2">
							{S(post.post.author.firstName + " " + post.post.author.lastName)
								.titleize()
								.value()}
						</h1>
					</div>
				</Link>
				<div className="flex flex-row gap-4 items-center">
					<span className="text-[#8494c1] text-sm">
						{moment(post.post.createdAt).fromNow()}
					</span>
					{currentUser.id !== post.post.author.id ? (
						<></>
					) : (
						<PostOptionsMenu postId={post.post.id} />
					)}
				</div>
			</div>
			<p className="text-lg">{post.post.content}</p>
			{post.post.media.length > 0 ? (
				<PostMediaCollage
					selectPost={selectPost}
					togglePostModal={togglePostModal}
					media={post.post.media}
				/>
			) : (
				<></>
			)}
		</div>
	);
}
