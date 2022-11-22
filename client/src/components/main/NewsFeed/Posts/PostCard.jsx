import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AddCommentSection from "./Comments/AddCommentSection";
import PostMediaCollage from "./Media/PostMediaCollage";
import PostStats from "./PostStats";
import S from "underscore.string";
import moment from "moment";
import { currentUserContext } from "../../../../contexts/CurrentUserContext";
import PostOptionsMenu from "./PostOptionsMenu";
import PostModal from "./PostModal/PostModal";
import { CurrentAppContext } from "../../../../contexts/AppContext";

export default function PostCard({
	isOpened,
	toggleCommentsModal,
	togglePostModal,
	post,
}) {
	const { currentUser } = useContext(currentUserContext);
	const { setSelectedPost } = useContext(CurrentAppContext);

	const selectPost = () => {
		setSelectedPost(post.id);
	};

	return (
		<div className="flex flex-col gap-4 bg-white  rounded-2xl py-6 px-5 shadow-postCardShadow">
			<div className="flex flex-row items-center justify-between w-full">
				<Link to={`/profile/${post.author.id}`}>
					<div className="flex flex-row  gap-4">
						<img
							className="w-16 rounded-lg object-cover "
							src={post.author.profileImage}
							alt=""
						/>
						<h1 className="font-medium pt-2">
							{S(post.author.firstName + " " + post.author.lastName)
								.titleize()
								.value()}
						</h1>
					</div>
				</Link>
				<div className="flex flex-row gap-4 items-center">
					<span className="text-[#8494c1] text-sm">
						{moment(post.createdAt).fromNow()}
					</span>
					{currentUser.id !== post.author.id ? (
						<></>
					) : (
						<PostOptionsMenu postId={post.id} />
					)}
				</div>
			</div>
			<p className="text-lg">{post.content}</p>
			{post.media.length > 0 ? (
				<PostMediaCollage
					selectPost={selectPost}
					togglePostModal={togglePostModal}
					media={post.media}
				/>
			) : (
				<></>
			)}

			<hr />
			<div className="flex flex-row justify-between gap-6">
				<AddCommentSection postId={post.id} />
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
