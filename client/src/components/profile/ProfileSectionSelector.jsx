import React, { useEffect, useState } from "react";
import Timeline from "./pageComponents/Timeline";
import About from "./pageComponents/About";
import Friends from "./pageComponents/friendsComponent/Friends";
import Photos from "./pageComponents/Photos";
import Videos from "./pageComponents/Videos";
import { useLocation } from "react-router";

export default function ProfileSectionSelector() {
	const location = useLocation();
	const [selectedPage, setSelectedPage] = useState("timeline");

	// useeffect to determine the page section to show based on the url
	useEffect(() => {
		if (location.pathname.split("/")[1] === "profile")
			location.pathname.split("/")[3] === "" ||
			location.pathname.split("/")[3] === undefined
				? setSelectedPage("timeline")
				: setSelectedPage(location.pathname.split("/")[3]);
	}, [location]);

	return selectedPage === "timeline" ? (
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
	);
}
