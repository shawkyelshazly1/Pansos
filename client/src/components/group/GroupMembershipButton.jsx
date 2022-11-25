import { useMutation } from "@apollo/client";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import { currentUserContext } from "../../contexts/CurrentUserContext";
import { JOIN_GROUP, LEAVE_GROUP } from "../../graphql/group/mutation";

export default function GroupMembershipButton({ group }) {
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
				<>
					<button
						onClick={() => {
							leaveGroup();
						}}
						onMouseEnter={(e) => {
							e.target.innerText = "Leave";
						}}
						onMouseLeave={(e) => {
							e.target.innerText = "Joined";
						}}
						className="rounded-lg px-4 py-2 font-medium bg-[#d8dadf] text-black hover:bg-red-500 hover:text-white"
					>
						Joined
					</button>
					<button className="rounded-lg px-4 py-2 font-medium bg-blue-500 text-white ">
						Invite
					</button>
				</>
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
					className="rounded-lg px-4 py-2 font-medium bg-blue-500 text-white hover:bg-red-500"
				>
					Pending
				</button>
			) : (
				<button
					onClick={() => {
						joinGroup();
					}}
					className="rounded-lg px-4 py-2 font-medium bg-green-500 text-white "
				>
					{group.groupType === "public" ? "Join Group" : "Request To Join"}
				</button>
			)}
		</>
	);
}
