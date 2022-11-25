import React from "react";
import S from "underscore.string";
import moment from "moment";
import { Link } from "react-router-dom";
import PostModalStats from "./PostModalStats";
import PostModalComments from "./PostModalComments";

export default function PostModalInfo({ post }) {
	return (
		<div className="bg-white lg:w-[35%] xl:w-[30%] 2xl:w-[25%] flex flex-col py-6 px-6 gap-6 h-full">
			<div className="flex flex-row gap-3 w-full">
				<Link to={`/profile/${post.author.id}`}>
					<img
						className="w-14 h-14 rounded-full"
						src={post.author.profileImage.url}
						alt=""
					/>
				</Link>
				<div className="flex flex-col pt-1">
					<Link to={`/profile/${post.author.id}`}>
						<h1 className="font-medium">
							{S(post.author.firstName + " " + post.author.lastName)
								.titleize()
								.value()}
						</h1>
					</Link>
					<p className="text-sm text-gray-500">
						{moment(post.createdAt).fromNow()} at{" "}
						{moment(post.createdAt).format("h:m a")}
					</p>
				</div>
			</div>
			<p>{post.content}</p>
			<PostModalStats post={post} />
			<PostModalComments post={post} />
		</div>
	);
}
