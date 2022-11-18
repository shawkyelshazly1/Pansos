import React from "react";
import LeftSideMenu from "../components/LeftSideMenu/LeftSideMenu";
import NewsFeed from "../components/NewsFeed/NewsFeed";
import RightSideMenu from "../components/RightSideMenu/RightSideMenu";

export default function Home() {
	return (
		<div className="flex flex-row w-full h-full justify-between gap-6">
			{/* Left side menu */}
			<LeftSideMenu />

			{/* Newsfeed */}
			<NewsFeed />

			{/* Right side menu */}
			<RightSideMenu />
		</div>
	);
}
