import React from "react";

import NavbarIcons from "./NavbarIcons";
import SearchBar from "./SearchBar";
import SideMenu from "./SideMenu";

export default function Navbar() {
	return (
		<div className=" bg-white min-h-[70px]">
			<div className="container mx-auto flex flex-row justify-between py-2 items-center h-full">
				<h1 className="text-mainColor text-3xl font-lobster font-semibold ">
					Pansos
					<strong className="text-black font-roboto font-extrabold text-4xl">
						.
					</strong>
				</h1>
				<div className="flex flex-row gap-10 items-center flex-1 justify-center">
					<NavbarIcons />
					<SearchBar />
				</div>
				<SideMenu />
			</div>
		</div>
	);
}
