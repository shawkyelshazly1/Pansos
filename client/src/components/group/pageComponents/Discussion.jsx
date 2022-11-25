import { useQuery } from "@apollo/client";
import React from "react";
import { LOAD_GROUP_POSTS } from "../../../graphql/post/query";
import PostsSection from "../../main/NewsFeed/Posts/PostsSection";
import NewPostSectionMobile from "../../main/RightSideMenu/AccountStats/AddPostSection/NewPostSectionMobile";
import LoadingSpinner from "../../utils/LoadingSpinner";

export default function Discussion({ group }) {
	// loadNews feed query
	const { data, loading } = useQuery(LOAD_GROUP_POSTS, {
		variables: { groupId: group.id },
	});

	if (loading) return <LoadingSpinner />;

	return (
		<div className="flex flex-col gap-2  w-full lg:w-3/4 xl:w-[60%]">
			<div className="flex flex-col gap-3 bg-white px-4 py-4 rounded-lg">
				<NewPostSectionMobile />
			</div>
			<PostsSection posts={data.loadGroupPosts} />
		</div>
	);
}
