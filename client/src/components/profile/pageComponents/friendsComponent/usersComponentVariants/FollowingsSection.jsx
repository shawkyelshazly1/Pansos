import { useQuery } from "@apollo/client";
import React, { useEffect } from "react";
import { GET_USER_FOLLOWINGS } from "../../../../../graphql/friendship/query";
import LoadingSpinner from "../../../../utils/LoadingSpinner";
import UserCard from "../UserCard";

export default function FollowingsSection({ selectedComponent }) {
	// get user followings
	const { data, loading, refetch } = useQuery(GET_USER_FOLLOWINGS, {
		skip: selectedComponent !== "followings",
	});

	// useffect to refetch on selectedComponent change
	useEffect(() => {
		refetch();
	}, [selectedComponent]);

	if (loading) return <LoadingSpinner />;
	console.log(data);
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
			{data.getUserFollowings.map((friendShip) => (
				<UserCard key={friendShip.id} user={friendShip.target} />
			))}
		</div>
	);
}
