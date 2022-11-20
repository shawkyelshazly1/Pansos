import React, { useEffect, useState } from "react";
import { GrFormClose } from "react-icons/gr";

import NewPostModalSection from "./NewPostModalSection";

export default function NewPostModal({ isOpened, toggleModal }) {
	// useEffect to handle clicking ESC to close modal
	useEffect(() => {
		let e = document.addEventListener("keydown", (e) => {
			if (e.key === "Escape") {
				toggleModal(false);
			}
		});
	}, []);

	return (
		<div
			className={`w-full h-full  items-center justify-center z-[999] ${
				isOpened ? "flex" : "hidden"
			}`}
		>
			<div
				onClick={(e) => {
					if (e.target.classList.contains("modal-overlay"))
						toggleModal(!isOpened);
				}}
				className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-[999] modal-overlay"
			>
				<div className="bg-white xl:w-2/4  min-h-[40%] max-h-fit w-4/5  rounded-xl px-10 py-6 shadow-sm  relative flex flex-col gap-4">
					<GrFormClose
						className="absolute right-2 top-2 cursor-pointer"
						size={30}
						onClick={() => {
							toggleModal(!isOpened);
						}}
					/>
					<div className="flex flex-col gap-4 items-center">
						<h1 className="text-[#848fac] font-medium self-start mb-2">
							ADD NEW POST
						</h1>

						<div className="w-full h-full">
							<NewPostModalSection toggleModal={toggleModal} />
						</div>
					</div>
				</div>
			</div>
			<div className="bg-gray-500 absolute opacity-50 top-0 left-0 w-full h-full"></div>
		</div>
	);
}
