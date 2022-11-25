import { useQuery } from "@apollo/client";
import React, { useContext } from "react";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { LOAD_USER_GROUPS } from "../../../../graphql/group/query";
import GroupCard from "./GroupCard";
import { currentUserContext } from "../../../../contexts/CurrentUserContext";
import LoadingCircleSpinner from "../../../utils/LoadingCircleSpinner";

export default function GroupSection() {
	const { currentUser } = useContext(currentUserContext);

	const { loading, data } = useQuery(LOAD_USER_GROUPS, {
		variables: { userId: currentUser.id },
	});

	if (loading) return <LoadingCircleSpinner />;
	return (
		<div className="flex flex-col bg-white rounded-2xl py-6 px-5 gap-6">
			<div className="flex flex-row justify-between items-center">
				<h1 className="text-[#848fac] font-medium">MY GROUP</h1>
				<BiDotsHorizontalRounded size={25} />
			</div>
			<div className="flex flex-col gap-4 max-h-[calc(100vh-68vh)] overflow-y-scroll">
				{data.loadUserGroups.map((group) => (
					<GroupCard key={group.id} group={group} />
				))}
			</div>
		</div>
	);
}
