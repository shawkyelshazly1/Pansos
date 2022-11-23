import React, { useContext, useState } from "react";
import PostCard from "./PostCard";
import CommentsModal from "./Comments/CommentsModal";
import NewPostSectionMobile from "../../RightSideMenu/AccountStats/AddPostSection/NewPostSectionMobile";
import PostModal from "./PostModal/PostModal";
import { CurrentAppContext } from "../../../../contexts/AppContext";
import { useLocation } from "react-router";
import SharedPostCard from "./SharedPostCard";

export default function PostsSection({ posts }) {
	const location = useLocation();
	const [showCommentsModal, setShowCommentsModal] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const { selectedPost } = useContext(CurrentAppContext);

	return (
		<div className=" flex flex-col  gap-6">
			{/* form to add posts on mobile devices */}
			{location.pathname === "/" ? (
				<div className=" flex-col bg-white rounded-2xl py-6 px-5 gap-2 items-center w-full flex xl:hidden ">
					<h1 className="text-[#848fac] font-medium self-start mb-2">
						ADD NEW POST
					</h1>
					<NewPostSectionMobile />
				</div>
			) : (
				<></>
			)}

			{posts.map((post) => {
				return !post.is_shared ? (
					<PostCard
						post={post}
						key={post.id}
						isOpened={showCommentsModal}
						toggleCommentsModal={setShowCommentsModal}
						togglePostModal={setShowModal}
					/>
				) : (
					<SharedPostCard
						post={post}
						key={post.id}
						isOpened={showCommentsModal}
						toggleCommentsModal={setShowCommentsModal}
						togglePostModal={setShowModal}
					/>
				);
			})}

			{selectedPost ? (
				<>
					<CommentsModal
						isOpened={showCommentsModal}
						toggleModal={setShowCommentsModal}
						post={selectedPost}
					/>
					<PostModal isOpened={showModal} toggleModal={setShowModal} />
				</>
			) : (
				<></>
			)}
		</div>
	);
}
