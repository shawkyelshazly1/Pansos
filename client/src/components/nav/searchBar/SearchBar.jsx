import { useLazyQuery } from "@apollo/client";
import React, { useState } from "react";
import { RiSearchLine } from "react-icons/ri";
import { useNavigate } from "react-router";
import { SEARCH_USERS } from "../../../graphql/user/query";
import SearchBarModal from "./SearchBarModal";

export default function SearchBar() {
	const navigate = useNavigate();
	const [showModal, setShowModal] = useState(false);
	const [searchQuery, setSearchQuery] = useState("");

	// query to search for users
	const [searchUsers, { data, loading, error }] = useLazyQuery(SEARCH_USERS);

	return (
		<div className=" hidden lg:flex flex-col w-1/4 relative items-center justify-center focus-within:w-2/5">
			<input
				type="text"
				className="w-full focus:outline-none bg-bgColor py-2 px-6 rounded-lg focus:rounded-b-none"
				placeholder="Search ..."
				onChange={(e) => {
					setSearchQuery(e.target.value.trim());
					if (e.target.value.trim() != "") {
						searchUsers({ variables: { searchQuery: e.target.value.trim() } });
					}
				}}
				onFocus={() => {
					setShowModal(true);
				}}
				onBlur={(e) => {
					if (!e.currentTarget.contains(e.relatedTarget)) {
						if (e.relatedTarget === null) setShowModal(false);
					}
				}}
				onKeyDown={(e) => {
					if (e.key === "Enter" && e.target.value.trim() != "") {
						navigate(`/search/${searchQuery}`);
						setShowModal(false);
						e.target.blur();
					}
				}}
			/>
			<RiSearchLine
				className="absolute right-3 text-secondaryColor "
				size={25}
			/>
			{showModal ? (
				<SearchBarModal
					result={data?.searchUsers}
					isLoading={loading}
					toggleModal={setShowModal}
					searchQuery={searchQuery}
				/>
			) : (
				<></>
			)}
		</div>
	);
}
