import { useLazyQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router";
import GroupHeader from "../components/group/GroupHeader";
import { LOAD_GROUP } from "../graphql/group/query";
import LoadingSpinner from "../components/utils/LoadingSpinner";
import GroupSectionSelector from "../components/group/GroupSectionSelector";

export default function Group() {
	const { groupId } = useParams();
	const navigate = useNavigate();
	const [loadedGroup, setLoadedGroup] = useState(null);

	// load group query
	const [loadGroup, { loading }] = useLazyQuery(LOAD_GROUP, {
		variables: { groupId },
		onError: (_) => {
			toast.error("Something Went Wrong!");
			navigate("/404");
		},
		onCompleted: ({ loadSingleGroup }) => {
			setLoadedGroup(loadSingleGroup);
		},
	});

	useEffect(() => {
		loadGroup();
	}, [groupId]);

	if (loading || loadedGroup === null) return <LoadingSpinner />;

	return (
		<div className="w-[90%] max-h-[calc(100vh-120px)]   flex flex-col  items-center min-h-full gap-4 overflow-y-scroll mx-auto pb-6">
			<GroupHeader group={loadedGroup} />
			<GroupSectionSelector group={loadedGroup} />
		</div>
	);
}
