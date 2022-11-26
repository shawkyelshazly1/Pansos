import React, { useEffect } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import StoryViewCircle from "./StoryViewCircle";

export default function StoryViewModal({
	toggleModal,
	isOpened,
	stories,
	setSelectedStories,
	selectedStories,
}) {
	// useEffect to handle clicking ESC to close modal
	useEffect(() => {
		let e = document.addEventListener("keydown", (e) => {
			if (e.key === "Escape") {
				setSelectedStories([]);
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
					if (e.target.classList.contains("modal-overlay")) {
						toggleModal(!isOpened);
						setSelectedStories([]);
					}
				}}
				className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-[999999] modal-overlay"
			>
				<div className="bg-white w-full h-full rounded-xl shadow-sm  relative flex flex-col gap-4 z-[9999]">
					<div className="w-full h-full flex flex-row justify-between items-center">
						{/* left section */}
						<LeftSection
							stories={stories}
							toggleModal={toggleModal}
							isOpened={isOpened}
							setSelectedStories={setSelectedStories}
						/>

						{/* right section */}
						<RightSection selectedStories={selectedStories} />
					</div>
				</div>
			</div>
			<div className="bg-gray-500 absolute opacity-50 top-0 left-0 w-full h-full"></div>
		</div>
	);
}
