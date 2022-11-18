import React from "react";
import PostsSection from "./PostsSection";
import StoriesSection from "./StoriesSection";

export default function NewsFeed() {
	return (
		<div className="flex flex-col flex-1  gap-6 w-full max-h-[calc(100vh-120px)] overflow-y-scroll">
			{/* stories section */}
			<StoriesSection />

			{/* posts newsfeed section */}
			<PostsSection />
		</div>
	);
}
