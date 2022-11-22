import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import S from "underscore.string";
import FollowButton from "./FollowButton";
import { currentUserContext } from "../../contexts/CurrentUserContext";
import { TbMessages } from "react-icons/tb";

export default function HeaderMenu({ loadedUser, toggleModal }) {
	const location = useLocation();
	const [selectedPage, setSelectedPage] = useState("timeline");

	// load currentUser Context
	const { currentUser } = useContext(currentUserContext);

	useEffect(() => {
		if (location.pathname.split("/")[1] === "profile")
			location.pathname.split("/")[3] === "" ||
			location.pathname.split("/")[3] === undefined
				? setSelectedPage("timeline")
				: setSelectedPage(location.pathname.split("/")[3]);
	}, [location]);

	return (
		<div className="flex flex-row justify-between items-center w-[90%] mx-auto pt-6">
			<div className="hidden lg:flex flex-row gap-8 items-center">
				<Link to={`/profile/${loadedUser.id}`}>
					<h1
						className={`font-semibold cursor-pointer  ${
							selectedPage === "timeline" ? "text-mainColor" : "text-[#8091ac]"
						}`}
					>
						Timeline
					</h1>
				</Link>
				{}
				<Link to={`/profile/${loadedUser.id}/about`}>
					<h1
						className={`font-semibold  cursor-pointer ${
							selectedPage === "about" ? "text-mainColor" : "text-[#8091ac]"
						}`}
					>
						About
					</h1>
				</Link>
				<Link to={`/profile/${loadedUser.id}/friends`}>
					<h1
						className={`font-semibold cursor-pointer  ${
							selectedPage === "friends" ? "text-mainColor" : "text-[#8091ac]"
						}`}
					>
						Friends
					</h1>
				</Link>
			</div>
			<div className="flex flex-row gap-4 flex-1 justify-center">
				<div
					className={`flex flex-col gap-1 items-center lg:ml-10   ${
						currentUser.id !== loadedUser.id ? "lg:pl-[103px]" : ""
					}`}
				>
					<h1 className="text-2xl text-[#192252] font-semibold hover:text-mainColor">
						{S(loadedUser.firstName + " " + loadedUser.lastName)
							.titleize()
							.value()}
					</h1>
					<p className="text-[#96a7c2] font-medium">Cairo, Egypt</p>
				</div>
			</div>
			<div className="hidden lg:flex flex-row gap-8 items-center">
				<Link to={`/profile/${loadedUser.id}/photos`}>
					<h1
						className={`font-semibold cursor-pointer  ${
							selectedPage === "photos" ? "text-mainColor" : "text-[#8091ac]"
						}`}
					>
						Photos
					</h1>
				</Link>
				<Link to={`/profile/${loadedUser.id}/videos`}>
					<h1
						className={`font-semibold cursor-pointer  ${
							selectedPage === "videos" ? "text-mainColor" : "text-[#8091ac]"
						}`}
					>
						Videos
					</h1>
				</Link>
				{currentUser.id !== loadedUser.id ? (
					<>
						<FollowButton loadedUser={loadedUser} />
						<Link to={`/message/${loadedUser.id}`}>
							<button className="flex flex-row items-center  font-semibold text-lg text-white bg-[#3a8dc1] rounded-lg px-4 py-2 ">
								<TbMessages size={30} />
							</button>
						</Link>
					</>
				) : (
					<button
						onClick={(e) => {
							toggleModal(true);
						}}
						className="font-semibold text-lg text-white bg-[#3a8dc1] rounded-lg   px-4 py-2 mr-[-20px]"
					>
						Edit Profile
					</button>
				)}
			</div>
		</div>
	);
}
