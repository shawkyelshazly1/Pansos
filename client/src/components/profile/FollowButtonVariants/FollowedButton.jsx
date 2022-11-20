import { useMutation } from "@apollo/client";
import React from "react";
import toast from "react-hot-toast";
import { DELETE_FOLLOW } from "../../../graphql/friendship/mutation";

export default function FollowedButton({ userId }) {
	// unfollow mutation
	const [unFollowUser] = useMutation(DELETE_FOLLOW, {
		variables: { userId },
		onError: (_) => {
			toast.error("Something Went Wrong!");
		},
		onCompleted: (_) => {
			toast.success("User UnFollowed Successfully.");
		},
	});

	return (
		<button
			className="font-semibold text-lg text-white bg-[#02da9e] rounded-lg min-w-[110px]  px-4 py-2 hover:bg-red-500"
			onMouseEnter={(e) => {
				e.target.innerText = "UnFollow";
			}}
			onMouseLeave={(e) => {
				e.target.innerText = "Following";
			}}
			onClick={() => {
				unFollowUser();
			}}
		>
			Following
		</button>
	);
}
