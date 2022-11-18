import React, { useEffect } from "react";
import StoryCircle from "./StoryCircle";

export default function StoriesSection() {
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
		</div>
	);
}
