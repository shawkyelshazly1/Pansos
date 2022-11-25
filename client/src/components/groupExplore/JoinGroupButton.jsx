import { useMutation } from "@apollo/client";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import { JOIN_GROUP, LEAVE_GROUP } from "../../graphql/group/mutation";
import { currentUserContext } from "../../contexts/CurrentUserContext";

export default function JoinGroupButton({ group }) {
	const navigate = useNavigate();

	const { currentUser } = useContext(currentUserContext);

	// join group mutation
	const [joinGroup] = useMutation(JOIN_GROUP, {
		variables: { groupId: group.id, groupType: group.groupType },
		onError: (_) => {
			toast.error("Something Went Wrong!");
		},
		onCompleted: (_) => {
			if (group.groupType === "private") {
				toast.success("Group Join Request Sent Successfully!");
			} else {
				toast.success("Joined Group Successfully!");
				navigate(`/group/${group.id}`);
			}
		},
	});

	// decline join request mutation
	const [leaveGroup] = useMutation(LEAVE_GROUP, {
		variables: { groupId: group.id },
		onError: (_) => {
			toast.error("Something Went Wrong!");
		},
		onCompleted: (_) => {
			toast.success("Request Cancelled Successfully!");
		},
	});

	return (
		<>
			{group.membershipStatus === "accepted" ? (
				<button
					onClick={() => {
						navigate(`/group/${group.id}`);
					}}
					className="text-white rounded-lg py-2 px-4 font-medium bg-green-500 mt-[-7px]"
				>
					Visit Group
				</button>
			) : group.membershipStatus === "pending" ? (
				<button
					onClick={() => {
						leaveGroup();
					}}
					onMouseEnter={(e) => {
						e.target.innerText = "Cancel Request";
					}}
					onMouseLeave={(e) => {
						e.target.innerText = "Pending";
					}}
					className="text-white rounded-lg py-2 px-4 font-medium bg-blue-500 mt-[-7px] hover:bg-red-500 "
				>
					Pending
				</button>
			) : (
				<button
					onClick={() => {
						joinGroup();
					}}
					className="text-white rounded-lg py-2 px-4 font-medium bg-blue-500 mt-[-7px]"
				>
					{group.groupType === "public" ? "Join Group" : "Request To Join"}
				</button>
			)}
		</>
	);
}
