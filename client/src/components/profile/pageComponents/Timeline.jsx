import React from "react";
import PostsSection from "../../main/NewsFeed/Posts/PostsSection";
import IntroSection from "../IntroSection";

export default function Timeline() {
	return (
		<div className=" w-[90%] flex flex-row gap-6  ">
			<IntroSection />
			<PostsSection />
		</div>
	);
}
