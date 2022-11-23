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
import PostCard from "./PostCard";

export default function SharedPostCard({
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
		<div className="flex flex-col gap-4 bg-white  rounded-2xl py-6 px-5 shadow-postCardShadow">
			<div className="flex flex-row items-center justify-between w-full">
				<Link to={`/profile/${post.sharedPostAuthor.id}`}>
					<div className="flex flex-row  gap-4">
						<img
							className="w-16 h-16 rounded-lg object-cover "
							src={post.sharedPostAuthor.profileImage.url}
							alt=""
						/>
						<h1 className="font-medium pt-2">
							{S(
								post.sharedPostAuthor.firstName +
									" " +
									post.sharedPostAuthor.lastName
							)
								.titleize()
								.value()}
						</h1>
					</div>
				</Link>
				<div className="flex flex-row gap-4 items-center">
					<span className="text-[#8494c1] text-sm">
						{moment(post.createdAt).fromNow()}
					</span>
					{currentUser.id !== post.sharedPostAuthor.id ? (
						<></>
					) : (
						<PostOptionsMenu postId={post.id} />
					)}
				</div>
			</div>
			<p className="text-lg">{post.sharedPostContent}</p>

			<hr />
			<div className="flex flex-row justify-between gap-6">
				<AddCommentSection post={post} />
				<PostStats
					isOpened={isOpened}
					toggleCommentsModal={toggleCommentsModal}
					post={post}
					selectPost={selectPost}
				/>
			</div>
		</div>
	);
}
