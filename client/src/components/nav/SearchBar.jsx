import React from "react";
import { RiSearchLine } from "react-icons/ri";

export default function SearchBar() {
	return (
		<div className=" hidden lg:flex w-1/4 relative items-center  ">
			<input
				type="text"
				className="w-full focus:outline-none bg-bgColor py-2 px-6 rounded-lg focus:border-2 focus:border-mainColor "
				placeholder="Search ..."
			/>
			<RiSearchLine
				className="absolute right-3 text-secondaryColor "
				size={25}
			/>
		</div>
	);
}
