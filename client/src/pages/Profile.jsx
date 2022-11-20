import React, { useEffect, useState } from "react";
import ProfileHeader from "../components/profile/ProfileHeader";
import Timeline from "../components/profile/pageComponents/Timeline";
import About from "../components/profile/pageComponents/About";
import Friends from "../components/profile/pageComponents/Friends";
import Photos from "../components/profile/pageComponents/Photos";
import Videos from "../components/profile/pageComponents/Videos";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { LOAD_USER } from "../graphql/user/query";
import toast from "react-hot-toast";
import LoadingSpinner from "../components/utils/LoadingSpinner";

export default function Profile() {
	const location = useLocation();
	const { userId } = useParams();
	const navigate = useNavigate();
	const [selectedPage, setSelectedPage] = useState("timeline");

	// loadUser query
	const { data, refetch, loading } = useQuery(LOAD_USER, {
		variables: { userId },
		onError: (error) => {
			console.log(error);
			toast.error("Something Went Wrong!");
			navigate("/404");
		},
	});

	// useeffect to update profile info if id changed
	useEffect(() => {
		refetch({ userId });
	}, [userId]);

	// useeffect to determine the page section to show based on the url
	useEffect(() => {
		if (location.pathname.split("/")[1] === "profile")
			location.pathname.split("/")[3] === "" ||
			location.pathname.split("/")[3] === undefined
				? setSelectedPage("timeline")
				: setSelectedPage(location.pathname.split("/")[3]);
	}, [location]);

	return (
		<div className="w-full max-h-[calc(100vh-120px)]   flex flex-col  items-center min-h-full gap-4 overflow-y-scroll">
			{loading ? (
				<LoadingSpinner />
			) : (
				<>
					<ProfileHeader loadedUser={data.loadUser} />
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
				</>
			)}
		</div>
	);
}
