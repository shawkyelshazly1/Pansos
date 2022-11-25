import React, { useContext, useEffect, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router";
import { currentUserContext } from "../../contexts/CurrentUserContext";
import About from "../group/pageComponents/About";
import Discussion from "./pageComponents/Discussion";
import MemberRequests from "./pageComponents/MemberRequests";
import People from "./pageComponents/People";

export default function GroupSectionSelector({ group }) {
	const location = useLocation();
	const navigate = useNavigate();
	const { currentUser } = useContext(currentUserContext);
	const [selectedPage, setSelectedPage] = useState(
		group.groupType === "private" && group.membershipStatus !== "accepted"
			? "about"
			: "discussion"
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
				if (location.pathname.split("/")[3] === "member-requests") {
					if (
						group.administrators.some(
							(user) => String(user.id) === String(currentUser.id)
						)
					) {
						setSelectedPage(location.pathname.split("/")[3]);
					} else {
						navigate(`/group/${group.id}/about`);
						setSelectedPage("about");
					}
				} else {
					setSelectedPage(location.pathname.split("/")[3]);
				}
			}
		}
	}, [location]);

	return selectedPage === "discussion" ? (
		<Discussion group={group} />
	) : selectedPage === "about" ? (
		<About group={group} />
	) : selectedPage === "members" ? (
		<People group={group} />
	) : selectedPage === "member-requests" ? (
		<MemberRequests group={group} selectedPage={selectedPage} />
	) : (
		""
	);
}
