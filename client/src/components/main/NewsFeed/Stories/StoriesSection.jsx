import React, { useEffect, useState } from "react";
import AddStoryModal from "./AddStoryModal/AddStoryModal";
import StoryCircle from "./StoryCircle";
import UserStoryCircle from "./UserStoryCircle";

export default function StoriesSection() {
	const [showModal, setShowModal] = useState(true);

	useEffect(() => {
		const scrollableContainer = document.querySelector(".stories-section");
		scrollableContainer.addEventListener("wheel", (e) => {
			e.preventDefault();
			console.log(e);
			scrollableContainer.scrollLeft += e.deltaY;
		});
	}, []);

	return (
		<div className="stories-section flex flex-row bg-white rounded-2xl py-6 px-5 gap-6 overflow-y-scroll w-full shrink-0">
			<UserStoryCircle toggleModal={setShowModal} />
			<StoryCircle />
			<StoryCircle />
			<StoryCircle />
			<StoryCircle />
			<StoryCircle />
			<StoryCircle />
			<StoryCircle />
			<StoryCircle />
			<StoryCircle />
			<StoryCircle />
			<StoryCircle />
			<StoryCircle />
			<StoryCircle />
			<StoryCircle />
			<StoryCircle />
			<StoryCircle />
			<AddStoryModal toggleModal={setShowModal} isOpened={showModal} />
		</div>
	);
}
