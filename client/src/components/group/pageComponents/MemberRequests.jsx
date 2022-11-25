import { useLazyQuery, useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useLocation, useParams } from "react-router";
import { LOAD_JOIN_REQUESTS } from "../../../graphql/group/query";
import LoadingSpinner from "../../utils/LoadingSpinner";
import MemberRequestCard from "./MemberRequestCard";

export default function MemberRequests({ group, selectedPage }) {
	const [memberRequests, setMemberRequests] = useState([]);

	const { groupId } = useParams();
	const location = useLocation();
	const { loading, refetch } = useQuery(LOAD_JOIN_REQUESTS, {
		variables: { groupId: group.id },
		onError: (_) => {
			toast.error("Something Went Wrong!");
		},
		onCompleted: ({ loadJoinRequests }) => {
			setMemberRequests(loadJoinRequests);
		},
	});

	useEffect(() => {
		refetch();
	}, [selectedPage]);

	if (loading) return <LoadingSpinner />;

	return (
		<div className="w-full lg:w-2/4 flex flex-col bg-white rounded-lg shadow-postCardShadow py-4 px-4 gap-4">
			<h1 className="font-medium text-2xl flex flex-row gap-1 items-center text-[#6d727d]">
				Member Requests
			</h1>
			<hr className="border-[1px]" />

			<div className="flex flex-col gap-2">
				<div className="flex flex-col gap-6">
					{memberRequests.map((request) => (
						<MemberRequestCard request={request} key={request.id} />
					))}
				</div>
			</div>
		</div>
	);
}
