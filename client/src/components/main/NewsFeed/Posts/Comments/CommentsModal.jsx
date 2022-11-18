import React, { useEffect } from "react";
import CommentCard from "./CommentCard";
import { GrFormClose } from "react-icons/gr";

export default function CommentsModal({ isOpened, toggleModal }) {
	useEffect(() => {
		let e = document.addEventListener("keydown", (e) => {
			if (e.key === "Escape") {
				toggleModal(false);
			}
		});
	}, []);

	return (
		<div
			className={` ${
				!isOpened ? "hidden" : ""
			}  w-full h-full  items-center flex justify-center z-[999] `}
		>
			<div
				className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-[999] modal-overlay"
				onClick={(e) => {
					console.log(e.target);
					if (e.target.classList.contains("modal-overlay"))
						toggleModal(!isOpened);
				}}
			>
				<div className="bg-white w-2/4 h-3/5 rounded-xl px-4 py-2 shadow-sm overflow-y-scroll relative">
					<GrFormClose
						className="absolute right-2 top-2 cursor-pointer"
						size={30}
						onClick={() => {
							toggleModal(!isOpened);
						}}
					/>
					<CommentCard />
				</div>
			</div>
			<div className="bg-gray-500 absolute opacity-50 top-0 left-0 w-full h-full"></div>
		</div>
	);
}
