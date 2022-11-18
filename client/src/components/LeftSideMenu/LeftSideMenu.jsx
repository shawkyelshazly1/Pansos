import React from "react";
import FriendsSection from "./FriendsSection";
import GroupSection from "./GroupSection";

export default function LeftSideMenu() {
	return (
		<div className="hidden lg:flex flex-col max-h-[calc(100vh-120px)]  xl:w-[20%]  w-[25%] gap-6 overflow-hidden">
			<GroupSection />
			<FriendsSection />
		</div>
	);
}
