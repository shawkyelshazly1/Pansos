import React from "react";
import StoriesSection from "./Stories/StoriesSection";
import PostsSection from "./Posts/PostsSection";
import { useQuery } from "@apollo/client";
import { LOAD_NEWSFEED } from "../../../graphql/post/query";
import LoadingSpinner from "../../utils/LoadingSpinner";

export default function NewsFeed() {
	// loadNews feed query
	const { data, loading } = useQuery(LOAD_NEWSFEED);

	return (
		<div className="flex flex-col flex-1  gap-6 w-full max-h-[calc(100vh-120px)] overflow-y-scroll">
			{/* stories section */}
			<StoriesSection />

			{/* posts newsfeed section */}
			{loading ? (
				<LoadingSpinner />
			) : (
				<PostsSection posts={data.getUserNewsfeed} />
			)}
		</div>
	);
}
