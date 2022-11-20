import React from "react";
import { Link } from "react-router-dom";
import SearchResultCard from "./SearchResultCard";
import { RiSearchLine } from "react-icons/ri";

export default function SearchBarModal({
	result,
	isLoading,
	toggleModal,
	searchQuery,
}) {
	return (
		<div className="flex flex-col gap-4 bg-bgColor py-3 px-6 absolute top-[2.5em] w-full rounded-b-lg z-[999] shadow-postCardShadow">
			<hr />
			<div className="flex flex-col gap-4">
				{!isLoading && !result ? (
					<h1>Start typing to search for users.</h1>
				) : isLoading ? (
					<h1>Loading results...</h1>
				) : (
					result.map((user) => (
						<SearchResultCard
							key={user.id}
							user={user}
							toggleModal={toggleModal}
						/>
					))
				)}

				{/* card to run wide search on search page */}
				{searchQuery !== "" ? (
					<Link
						to={`/search/${searchQuery}`}
						onClick={() => {
							toggleModal(false);
						}}
					>
						<div className="flex flex-row gap-4 items-center">
							<RiSearchLine
								size={30}
								className="bg-white text-mainColor rounded-full p-2 w-10 h-10 font-bol"
							/>

							<h1 className=" pt-2">
								Search for <b>{searchQuery}</b>
							</h1>
						</div>
					</Link>
				) : (
					<></>
				)}
			</div>
		</div>
	);
}
