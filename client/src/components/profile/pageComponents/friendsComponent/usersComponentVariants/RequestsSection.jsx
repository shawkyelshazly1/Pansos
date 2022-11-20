import { useQuery } from "@apollo/client";
import React, { useEffect } from "react";
import { GET_PENDING_RECIEVED_REQEUSTS } from "../../../../../graphql/friendship/query";
import UserCardRequest from "../UserCardRequest";
import LoadingSpinner from "../../../../utils/LoadingSpinner";

export default function RequestsSection({ selectedComponent }) {
	// get user followers pending RequestsSection
	const { data, loading, refetch } = useQuery(GET_PENDING_RECIEVED_REQEUSTS, {
		skip: selectedComponent !== "requests",
	});

	// use effect to refetch on component change
	useEffect(() => {
		refetch();
	}, [selectedComponent]);

	if (loading) return <LoadingSpinner />;
	return (
		<div className="grid grid-cols-3 gap-6">
			{data.getPendingRecievedRquests.map((request) => (
				<UserCardRequest key={request.id} user={request.author} />
			))}
		</div>
	);
}
