import React from "react";
import { SEARCH_USERS } from "../../graphql/user/query";
import { useQuery } from "@apollo/client";
import SearchResultCard from "./SearchResultCard";
import toast from "react-hot-toast";
import LoadingSpinner from "../utils/LoadingSpinner";

export default function SearchComponent({ searchQuery }) {
	const { data, loading } = useQuery(SEARCH_USERS, {
		variables: { searchQuery },
		onError: (_) => {
			toast.error("Something Went Wrong!");
		},
	});

	if (loading) return <LoadingSpinner />;
	if (!data || data.searchUsers.length < 1)
		return <h1>Couldn't find search results.</h1>;
	console.log(data);
	return (
		<div className="w-[90%] px-8 grid grid-cols-4 gap-12 pb-4">
			{data.searchUsers.map((user) => (
				<SearchResultCard key={user.id} user={user} />
			))}
		</div>
	);
}
