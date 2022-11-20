import { useQuery } from "@apollo/client";
import React, { useEffect } from "react";
import { useParams } from "react-router";
import { GET_USER_FOLLOWERS } from "../../../../../graphql/friendship/query";
import LoadingSpinner from "../../../../utils/LoadingSpinner";
import UserCard from "../UserCard";

export default function FollowersSection({ selectedComponent }) {
	const { userId } = useParams();

	// get user followers
	const { data, loading, refetch } = useQuery(GET_USER_FOLLOWERS, {
		skip: selectedComponent !== "followers",
		variables: { userId },
	});

	// useffect to refetch on selectedComponent change
	useEffect(() => {
		refetch();
	}, [selectedComponent]);

	if (loading) return <LoadingSpinner />;
	return (
		<div className="grid grid-cols-3 gap-6">
			{data.getUserFollowers.map((friendShip) => (
				<UserCard key={friendShip.id} user={friendShip.author} />
			))}
		</div>
	);
}
