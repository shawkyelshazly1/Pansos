import React, { useEffect, useState } from "react";
import ProfileHeader from "../components/profile/ProfileHeader";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { LOAD_USER } from "../graphql/user/query";
import toast from "react-hot-toast";
import LoadingSpinner from "../components/utils/LoadingSpinner";
import ProfileSectionSelector from "../components/profile/ProfileSectionSelector";

export default function Profile() {
	const { userId } = useParams();
	const navigate = useNavigate();

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

	return (
		<div className="w-full max-h-[calc(100vh-120px)]   flex flex-col  items-center min-h-full gap-4 overflow-y-scroll">
			{loading ? (
				<LoadingSpinner />
			) : (
				<>
					<ProfileHeader loadedUser={data.loadUser} />
					<ProfileSectionSelector />
				</>
			)}
		</div>
	);
}
