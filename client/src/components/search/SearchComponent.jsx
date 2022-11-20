import React, { useEffect } from "react";
import { LOAD_SUGGGESSTED_USERS, SEARCH_USERS } from "../../graphql/user/query";
import { useLazyQuery, useQuery } from "@apollo/client";
import SearchResultCard from "./SearchResultCard";
import toast from "react-hot-toast";
import LoadingSpinner from "../utils/LoadingSpinner";
import { useParams } from "react-router";

export default function SearchComponent() {
	const { searchQuery } = useParams();

	// search users query
	const { data, loading } = useQuery(SEARCH_USERS, {
		skip: searchQuery === "" || !searchQuery,
		variables: { searchQuery },
		onError: (_) => {
			toast.error("Something Went Wrong!");
		},
	});

	// load suggessted users query if no search query param
	const { data: suggesstedUsers, loading: loadingSuggesstedUsers } = useQuery(
		LOAD_SUGGGESSTED_USERS,
		{
			onError: (_) => {
				toast.error("Something Went Wrong!");
			},
			fetchPolicy: "network-only",
		}
	);

	// loading states and 0 result
	if (loading || loadingSuggesstedUsers) return <LoadingSpinner />;
	if ((!data || data?.searchUsers.length < 1) && searchQuery?.length > 1)
		return <h1>Couldn't find search results.</h1>;

	return (
		<div className="w-[90%] px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 pb-4">
			{searchQuery !== "" && searchQuery
				? data?.searchUsers.map((user) => (
						<SearchResultCard key={user.id} user={user} />
				  ))
				: suggesstedUsers?.getSuggesstedUsers.map((user) => (
						<SearchResultCard key={user.id} user={user} />
				  ))}
		</div>
	);
}
