import React from "react";
import { useParams } from "react-router";
import SearchComponent from "../components/search/SearchComponent";

export default function Search() {
	const { searchQuery } = useParams();

	return (
		<div className="w-full max-h-[calc(100vh-120px)] flex flex-col  items-center min-h-full gap-4 overflow-y-scroll">
			<SearchComponent searchQuery={searchQuery} />
		</div>
	);
}
