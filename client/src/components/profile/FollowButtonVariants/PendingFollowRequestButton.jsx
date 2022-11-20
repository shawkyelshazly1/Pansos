import { useMutation } from "@apollo/client";
import React from "react";
import toast from "react-hot-toast";
import { DELETE_FOLLOW } from "../../../graphql/friendship/mutation";

export default function PendingFollowRequestButton({ userId }) {
	// mutation to cancel pending request
	const [cancelPendingRequest] = useMutation(DELETE_FOLLOW, {
		variables: { userId },
		onError: (_) => {
			toast.error("Something Went Wrong!");
		},
		onCompleted: (_) => {
			toast.success("Follow Request Cancelled Successfully.");
		},
	});

	return (
		<button
			className="font-semibold text-lg text-white bg-[#45bdde] rounded-lg min-w-[110px]  px-4 py-2 hover:bg-red-500"
			onMouseEnter={(e) => {
				e.target.innerText = "Cancel";
			}}
			onMouseLeave={(e) => {
				e.target.innerText = "Pending";
			}}
			onClick={() => {
				cancelPendingRequest();
			}}
		>
			Pending
		</button>
	);
}
