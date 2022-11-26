import React from "react";
import S from "underscore.string";

export default function StoryViewCircle({ userStories, setSelectedStories }) {
	let unViewedStories = userStories.some((story) => !story.isViewed);

	return (
		<div
			className="flex flex-row gap-4 items-center hover:bg-bgColor py-2 px-2 rounded-lg cursor-pointer"
			onClick={() => {
				setSelectedStories(userStories);
			}}
		>
			<div
				className={`border-2 ${
					unViewedStories ? "border-[#c23100]" : "border-secondaryColor"
				}  rounded-full p-[2px] shrink-0 cursor-pointer `}
			>
				<img
					className="rounded-full object-cover w-16 h-16"
					src={userStories[0].user.profileImage.url}
					alt=""
				/>
			</div>
			<h1 className="text-xl font-medium">
				{" "}
				{S(userStories[0].user.firstName + " " + userStories[0].user.lastName)
					.titleize()
					.value()}
			</h1>
		</div>
	);
}
