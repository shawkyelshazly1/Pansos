import React, { useEffect } from "react";
import CommentCard from "./CommentCard";
import { GrFormClose } from "react-icons/gr";
import AddCommentSection from "./AddCommentSection";
import { useLazyQuery, useQuery } from "@apollo/client";
import { LOAD_POST_COMMENTS } from "../../../../../graphql/comment/query";
import LoadingSpinner from "../../../../utils/LoadingSpinner";
import { AiFillMessage } from "react-icons/ai";
import toast from "react-hot-toast";

export default function CommentsModal({ isOpened, toggleModal, postId }) {
	// useEffect to handle clicking ESC to close modal
	useEffect(() => {
		let e = document.addEventListener("keydown", (e) => {
			if (e.key === "Escape") {
				toggleModal(false);
			}
		});
	}, []);

	useEffect(() => {
		if (isOpened) {
			loadComments();
		}
	}, [isOpened]);

	// query to load post comments
	const [loadComments, { data, loading }] = useLazyQuery(LOAD_POST_COMMENTS, {
		variables: { postId },
		onError: (_) => {
			toast.error("Something went wrong!");
			toggleModal(false);
		},
	});

	return (
		<div
			className={` ${
				!isOpened ? "hidden" : ""
			}  w-full h-full  items-center flex justify-center z-[999] `}
		>
			<div
				className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-[999] modal-overlay"
				onClick={(e) => {
					if (e.target.classList.contains("modal-overlay"))
						toggleModal(!isOpened);
				}}
			>
				<div className="bg-white xl:w-2/4 h-2/4 w-4/5 xl:h-4/5 rounded-xl px-10 py-6 shadow-sm  relative flex flex-col gap-4">
					<GrFormClose
						className="absolute right-2 top-2 cursor-pointer"
						size={30}
						onClick={() => {
							toggleModal(!isOpened);
						}}
					/>
					<h1 className="font-semibold text-2xl text-[#8a90b3]">COMMENTS</h1>
					<div className="overflow-y-scroll flex flex-col gap-6  flex-1">
						{loading ? (
							<LoadingSpinner />
						) : data?.loadPostComments.length === 0 ? (
							<div className="w-full h-full flex items-center justify-center flex-col gap-4">
								<AiFillMessage size={90} className="text-secondaryColor" />
								<h1 className="text-2xl font-semibold text-secondaryColor">
									Be the first to comment.
								</h1>
							</div>
						) : (
							data?.loadPostComments.map((comment) => (
								<CommentCard commentData={comment} key={comment.id} />
							))
						)}
					</div>
					<div className="h-[10%] flex">
						<AddCommentSection postId={postId} />
					</div>
				</div>
			</div>
			<div className="bg-gray-500 absolute opacity-50 top-0 left-0 w-full h-full"></div>
		</div>
	);
}
