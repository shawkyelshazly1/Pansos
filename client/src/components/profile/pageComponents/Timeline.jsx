import { useQuery } from "@apollo/client";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { LOAD_USER_POSTS } from "../../../graphql/user/query";
import PostsSection from "../../main/NewsFeed/Posts/PostsSection";
import LoadingSpinner from "../../utils/LoadingSpinner";
import IntroSection from "../IntroSection";

export default function Timeline() {
	const { userId } = useParams();
	const navigate = useNavigate();

	// loadUser posts query
	const { data, refetch, loading } = useQuery(LOAD_USER_POSTS, {
		variables: { userId },
		onError: (error) => {
			toast.error("Something Went Wrong!");
			navigate("/404");
		},
	});

	// useeffect to update profile info if id changed
	useEffect(() => {
		refetch({ userId });
	}, [userId]);

	return (
		<div className=" w-[90%] flex flex-row gap-6  ">
			{loading ? (
				<LoadingSpinner />
			) : (
				<>
					<IntroSection />
					<div className="w-full">
						<PostsSection posts={data.getUserPosts} />
					</div>
				</>
			)}
		</div>
	);
}
