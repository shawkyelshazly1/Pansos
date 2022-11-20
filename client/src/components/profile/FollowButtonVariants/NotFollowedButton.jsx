import { useMutation } from "@apollo/client";
import React from "react";
import toast from "react-hot-toast";
import { SEND_FOLLOW_REQUEST } from "../../../graphql/friendship/mutation";

export default function NotFollowedButton({ userId }) {
	//mutation to follow user
	const [followUser] = useMutation(SEND_FOLLOW_REQUEST, {
		variables: { userId },
		onError: (_) => {
			toast.error("Something Went Wrong!");
		},
		onCompleted: (_) => {
			toast.success("Follow Request Sent Successfully.");
		},
	});

	return (
		<button
			className="font-semibold text-lg text-white bg-mainColor rounded-lg min-w-[110px]  px-4 py-2 "
			onClick={() => {
				followUser();
			}}
		>
			+ Follow
		</button>
	);
}
