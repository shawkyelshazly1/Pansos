import { useLazyQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { MdGroups } from "react-icons/md";
import GroupExploreCard from "../components/groupExplore/GroupExploreCard";
import NewGroupModal from "../components/groupExplore/NewGroupModal";
import { LOAD_SUGGESSTED_GROUPS } from "../graphql/group/query";

export default function GroupExplore() {
	const [showModal, setShowModal] = useState(false);
	const [suggesstedGroups, setSuggesstedGroups] = useState([]);

	useEffect(() => {
		loadSuggesstedGroups();
	}, []);

	// use query to load suggessted groups
	const [loadSuggesstedGroups] = useLazyQuery(LOAD_SUGGESSTED_GROUPS, {
		onError: (_) => {
			toast.error("Something Went Wrong!");
		},
		onCompleted: ({ loadSuggesstedGroups }) => {
			setSuggesstedGroups(loadSuggesstedGroups);
		},
	});

	return (
		<div className="w-full max-h-[calc(100vh-120px)] flex flex-col  items-center min-h-full gap-6 overflow-y-scroll">
			<button
				className="bg-mainColor text-white font-medium py-2 px-4 rounded-lg self-end flex flex-cols items-center justify-center gap-2"
				onClick={() => {
					setShowModal(true);
				}}
			>
				<MdGroups size={25} />
				Create New Group
			</button>
			<div className="w-[90%] px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 pb-4">
				{suggesstedGroups.map((group) => (
					<GroupExploreCard key={group.id} group={group} />
				))}
			</div>
			{/* create group modal */}
			<NewGroupModal toggleModal={setShowModal} isOpened={showModal} />
		</div>
	);
}
