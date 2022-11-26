import React from "react";

export default function StoryCircle({
	stories,
	toggleModal,
	setSelectedStories,
}) {
	let unViewedStories = stories.some((story) => !story.isViewed);

	return (
		<div
			onClick={() => {
				setSelectedStories(stories);
				toggleModal(true);
			}}
			className={`border-2 ${
				unViewedStories ? "border-[#c23100]" : "border-secondaryColor"
			}  rounded-full p-[2px] shrink-0 cursor-pointer `}
		>
			<img
				className="rounded-full object-cover w-20 h-20"
				src={stories[0].user.profileImage.url}
				alt=""
			/>
		</div>
	);
}
