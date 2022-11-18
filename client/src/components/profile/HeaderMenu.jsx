import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function HeaderMenu() {
	const location = useLocation();
	const [selectedPage, setSelectedPage] = useState("timeline");

	useEffect(() => {
		console.log(location.pathname.split("/"));
		if (location.pathname.split("/")[1] === "profile")
			location.pathname.split("/")[3] === "" ||
			location.pathname.split("/")[3] === undefined
				? setSelectedPage("timeline")
				: setSelectedPage(location.pathname.split("/")[3]);
	}, [location]);

	return (
		<div className="flex flex-row justify-between items-center w-[90%] mx-auto pt-6">
			<div className="hidden lg:flex flex-row gap-8 items-center">
				<Link to={"/profile/123456"}>
					<h1
						className={`font-semibold cursor-pointer  ${
							selectedPage === "timeline" ? "text-mainColor" : "text-[#8091ac]"
						}`}
					>
						Timeline
					</h1>
				</Link>
				<Link to={"/profile/123456/about"}>
					<h1
						className={`font-semibold  cursor-pointer ${
							selectedPage === "about" ? "text-mainColor" : "text-[#8091ac]"
						}`}
					>
						About
					</h1>
				</Link>
				<Link to={"/profile/123456/friends"}>
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
				<div className="flex flex-col gap-1 items-center lg:ml-10">
					<h1 className="text-2xl text-[#192252] font-semibold hover:text-mainColor">
						Shawky Ahmed
					</h1>
					<p className="text-[#96a7c2] font-medium">Cairo, Egypt</p>
				</div>
			</div>
			<div className="hidden lg:flex flex-row gap-8 items-center">
				<Link to={"/profile/123456/photos"}>
					<h1
						className={`font-semibold cursor-pointer  ${
							selectedPage === "photos" ? "text-mainColor" : "text-[#8091ac]"
						}`}
					>
						Photos
					</h1>
				</Link>
				<Link to={"/profile/123456/videos"}>
					<h1
						className={`font-semibold cursor-pointer  ${
							selectedPage === "videos" ? "text-mainColor" : "text-[#8091ac]"
						}`}
					>
						Videos
					</h1>
				</Link>
				<button className="font-semibold text-lg text-white bg-mainColor rounded-lg  px-4 py-2 ">
					+ Follow
				</button>
			</div>
		</div>
	);
}
