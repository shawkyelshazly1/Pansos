import React, { useEffect, useState } from "react";
import ProfileHeader from "../components/profile/ProfileHeader";
import Timeline from "../components/profile/pageComponents/Timeline";
import About from "../components/profile/pageComponents/About";
import Friends from "../components/profile/pageComponents/Friends";
import Photos from "../components/profile/pageComponents/Photos";
import Videos from "../components/profile/pageComponents/Videos";
import { useLocation } from "react-router-dom";

export default function Profile() {
	const location = useLocation();
	const [selectedPage, setSelectedPage] = useState("timeline");

	useEffect(() => {
		if (location.pathname.split("/")[1] === "profile")
			location.pathname.split("/")[3] === "" ||
			location.pathname.split("/")[3] === undefined
				? setSelectedPage("timeline")
				: setSelectedPage(location.pathname.split("/")[3]);
	}, [location]);

	return (
		<div className="w-full max-h-[calc(100vh-120px)]   flex flex-col  items-center min-h-full gap-4 overflow-y-scroll">
			<ProfileHeader />
			{selectedPage === "timeline" ? (
				<Timeline />
			) : selectedPage === "about" ? (
				<About />
			) : selectedPage === "friends" ? (
				<Friends />
			) : selectedPage === "photos" ? (
				<Photos />
			) : selectedPage === "videos" ? (
				<Videos />
			) : (
				""
			)}
		</div>
	);
}
