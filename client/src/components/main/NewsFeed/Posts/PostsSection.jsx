import React, { useState } from "react";
import PostCard from "./PostCard";
import CommentsModal from "./Comments/CommentsModal";

export default function PostsSection({ posts }) {
	const [showCommentsModal, setShowCommentsModal] = useState(false);
	const [selectedPost, setSelectedPost] = useState("");
	// #FIXME: fix rerender issue on modal open and close
	return (
		<div className=" flex flex-col  gap-6 ">
			{posts.map((post) => (
				<PostCard
					post={post}
					key={post.id}
					isOpened={showCommentsModal}
					toggleModal={setShowCommentsModal}
					setSelectedPost={setSelectedPost}
				/>
			))}

			<CommentsModal
				isOpened={showCommentsModal}
				toggleModal={setShowCommentsModal}
				postId={selectedPost}
			/>
		</div>
	);
}
