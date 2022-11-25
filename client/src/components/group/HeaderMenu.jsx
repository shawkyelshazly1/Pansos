import React, { useContext, useEffect, useState } from "react";
import { MdPublic } from "react-icons/md";
import { RiGitRepositoryPrivateFill } from "react-icons/ri";
import S from "underscore.string";
import numeral from "numeral";
import GroupMembershipButton from "./GroupMembershipButton";
import { Link, useLocation } from "react-router-dom";
import { currentUserContext } from "../../contexts/CurrentUserContext";

export default function HeaderMenu({ group }) {
	const location = useLocation();
	const [selectedPage, setSelectedPage] = useState("discussion");

	const { currentUser } = useContext(currentUserContext);

	// useeffect to determine the page section to show based on the url
	useEffect(() => {
		if (
			location.pathname.split("/")[1] === "discussion" ||
			location.pathname.split("/")[3] === "" ||
			location.pathname.split("/")[3] === undefined
		) {
			setSelectedPage("discussion");
		} else {
			setSelectedPage(location.pathname.split("/")[3]);
		}
	}, [location]);

	return (
		<div className="flex flex-col gap-3 px-4">
			<div className="flex flex-col lg:flex-row lg:justify-between gap-4 ">
				<div className=" flex flex-col gap-2">
					<h1 className="font-medium text-3xl">
						{S(group.name).titleize().value()}
					</h1>
					<div className="flex flex-row gap-4">
						<p className="flex flex-row gap-2 items-center justify-center text-[#97a0b3]">
							{group.groupType === "public" ? (
								<>
									<MdPublic size={15} /> Public Group
								</>
							) : (
								<>
									<RiGitRepositoryPrivateFill size={15} /> Private Group
								</>
							)}
						</p>
						<p className="text-[#6d727d] font-medium">
							{numeral(group.groupMembersCount).format("0a")} Members
						</p>
					</div>
				</div>
				<div className="flex flex-row gap-4 items-center">
					<GroupMembershipButton group={group} />
				</div>
			</div>
			<hr className="border-[1px]" />
			<div className="flex flex-row gap-2">
				<Link to={`/group/${group.id}/`}>
					<button
						className={`px-2 py-3 font-medium ${
							group.groupType === "private" &&
							group.membershipStatus !== "accepted"
								? "hidden"
								: ""
						} ${
							selectedPage === "discussion"
								? " border-b-4 border-b-mainColor text-mainColor"
								: " border-b-4 border-b-transparent hover:bg-bgColor rounded-lg"
						}`}
					>
						Discussion
					</button>
				</Link>
				<Link to={`/group/${group.id}/about`}>
					<button
						className={`px-2 py-3  font-medium${
							selectedPage === "about"
								? " border-b-4 border-b-mainColor text-mainColor "
								: " border-b-4 border-b-transparent hover:bg-bgColor rounded-lg"
						}`}
					>
						About
					</button>
				</Link>
				<Link to={`/group/${group.id}/members`}>
					<button
						className={`px-2 py-3 font-medium ${
							group.groupType === "private" &&
							group.membershipStatus !== "accepted"
								? "hidden"
								: ""
						} ${
							selectedPage === "members"
								? " border-b-4 border-b-mainColor text-mainColor "
								: " border-b-4 border-b-transparent hover:bg-bgColor rounded-lg"
						}`}
					>
						People
					</button>
				</Link>
				{group.administrators.some(
					(user) => String(user.id) === String(currentUser.id)
				) ? (
					<Link to={`/group/${group.id}/member-requests`}>
						<button
							className={`px-2 py-3 font-medium ${
								group.groupType === "private" &&
								group.membershipStatus !== "accepted"
									? "hidden"
									: ""
							} ${
								selectedPage === "member-requests"
									? " border-b-4 border-b-mainColor text-mainColor "
									: " border-b-4 border-b-transparent hover:bg-bgColor rounded-lg"
							}`}
						>
							Member Requests
						</button>
					</Link>
				) : (
					<></>
				)}
			</div>
		</div>
	);
}
