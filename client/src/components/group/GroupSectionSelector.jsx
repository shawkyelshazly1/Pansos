import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import About from "../group/pageComponents/About";
import Discussion from "./pageComponents/Discussion";
import People from "./pageComponents/People";

export default function GroupSectionSelector({ group }) {
	const location = useLocation();
	const [selectedPage, setSelectedPage] = useState(
		group.groupType === "private" && group.membershipStatus !== "accepted"
			? "about"
			: "discussion"
	);

	console.log(
		group.groupType === "private" && group.membershipStatus !== "accepted"
	);
	// useeffect to determine the page section to show based on the url
	useEffect(() => {
		if (
			location.pathname.split("/")[1] === "discussion" ||
			location.pathname.split("/")[3] === "" ||
			location.pathname.split("/")[3] === undefined
		) {
			if (
				group.groupType === "private" &&
				group.membershipStatus !== "accepted"
			) {
				setSelectedPage("about");
			} else {
				setSelectedPage("discussion");
			}
		} else {
			if (
				group.groupType === "private" &&
				group.membershipStatus !== "accepted"
			) {
				setSelectedPage("about");
			} else {
				setSelectedPage(location.pathname.split("/")[3]);
			}
		}
	}, [location]);

	return selectedPage === "discussion" ? (
		<Discussion group={group} />
	) : selectedPage === "about" ? (
		<About group={group} />
	) : selectedPage === "members" ? (
		<People group={group} />
	) : (
		""
	);
}
