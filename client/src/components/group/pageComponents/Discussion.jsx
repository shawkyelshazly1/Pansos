import React from "react";
import PostsSection from "../../main/NewsFeed/Posts/PostsSection";
import NewPostSectionMobile from "../../main/RightSideMenu/AccountStats/AddPostSection/NewPostSectionMobile";

export default function Discussion() {
	return (
		<div className="flex flex-col gap-2  w-full lg:w-3/4 xl:w-[60%]">
			<div className="flex flex-col gap-3 bg-white px-4 py-4 rounded-lg">
				<NewPostSectionMobile />
			</div>
			<PostsSection posts={[]} />
		</div>
	);
}
