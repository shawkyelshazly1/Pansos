import React, { useState } from "react";
import PostCard from "./PostCard";
import CommentsModal from "./Comments/CommentsModal";

export default function PostsSection() {
	const [showCommentsModal, setShowCommentsModal] = useState(false);
	// #FIXME: fix rerender issue on modal open and close
	return (
		<div className=" flex flex-col  gap-6 ">
			<PostCard
				isOpened={showCommentsModal}
				toggleModal={setShowCommentsModal}
			/>
			<PostCard
				isOpened={showCommentsModal}
				toggleModal={setShowCommentsModal}
			/>
			<PostCard
				isOpened={showCommentsModal}
				toggleModal={setShowCommentsModal}
			/>
			<PostCard
				isOpened={showCommentsModal}
				toggleModal={setShowCommentsModal}
			/>
			<PostCard
				isOpened={showCommentsModal}
				toggleModal={setShowCommentsModal}
			/>
			<PostCard
				isOpened={showCommentsModal}
				toggleModal={setShowCommentsModal}
			/>

			<CommentsModal
				isOpened={showCommentsModal}
				toggleModal={setShowCommentsModal}
			/>
		</div>
	);
}
