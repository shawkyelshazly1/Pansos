import React from "react";
import { IoMdCloseCircle } from "react-icons/io";
import StoryViewCircle from "./StoryViewCircle";

export default function LeftSection({
	stories,
	toggleModal,
	isOpened,
	setSelectedStories,
}) {
	return (
		<div className="lg:flex flex-col w-[20%] hidden h-full py-4 px-4 gap-4">
			<div className="flex flex-row items-center gap-2 w-full">
				<IoMdCloseCircle
					className="cursor-pointer text-secondaryColor"
					size={55}
					onClick={() => {
						toggleModal(!isOpened);
					}}
				/>
				<h1 className="text-mainColor text-3xl font-lobster font-semibold  ">
					Pansos
					<strong className="text-black font-roboto font-extrabold text-4xl">
						.
					</strong>
				</h1>
			</div>
			<hr className="border-[1px]" />
			<h1 className="text-[#848fac] font-medium text-2xl">ALL STORIES</h1>
			<div className="flex flex-col gap-2  overflow-y-scroll">
				{stories.map((userStories) => (
					<StoryViewCircle
						userStories={userStories.stories}
						setSelectedStories={setSelectedStories}
					/>
				))}
			</div>
		</div>
	);
}
