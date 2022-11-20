import React, { useState } from "react";
import PostCard from "./PostCard";
import CommentsModal from "./Comments/CommentsModal";
import NewPostSectionMobile from "../../RightSideMenu/AccountStats/AddPostSection/NewPostSectionMobile";

export default function PostsSection({ posts }) {
	const [showCommentsModal, setShowCommentsModal] = useState(false);
	const [selectedPost, setSelectedPost] = useState("");
	// #FIXME: fix rerender issue on modal open and close
	return (
		<div className=" flex flex-col  gap-6">
			{/* form to add posts on mobile devices */}
			<div className=" flex-col bg-white rounded-2xl py-6 px-5 gap-2 items-center w-full flex xl:hidden ">
				<h1 className="text-[#848fac] font-medium self-start mb-2">
					ADD NEW POST
				</h1>
				<NewPostSectionMobile />
			</div>
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
