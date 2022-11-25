import { useMutation } from "@apollo/client";
import React from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import S from "underscore.string";
import {
	ACCEPT_JOIN_REQUEST,
	DECLINE_JOIN_REQUEST,
} from "../../../graphql/group/mutation";
export default function MemberRequestCard({ request }) {
	// accept join request mutaiton
	const [acceptRequest] = useMutation(ACCEPT_JOIN_REQUEST, {
		variables: { groupId: request.group.id, userId: request.user.id },
		onError: (_) => {
			toast.error("Something Went Wrong!");
		},
		onCompleted: (_) => {
			toast.success("Join Request Accepted Successfully!");
		},
		update: (cache, { data }) => {
			if (!data) return;
			// normalize relation ship to use it with cache
			const normalized = cache.identify({
				id: data.acceptJoinRequest.id,
				__typename: "GroupMember",
			});
			cache.evict({ id: normalized });
			cache.gc();
		},
	});

	// decline join request mutaiton
	const [declineRequest] = useMutation(DECLINE_JOIN_REQUEST, {
		variables: { groupId: request.group.id, userId: request.user.id },
		onError: (_) => {
			toast.error("Something Went Wrong!");
		},
		onCompleted: (_) => {
			toast.success("Join Request Declined Successfully!");
		},
		update: (cache, { data }) => {
			if (!data) return;
			// normalize relation ship to use it with cache
			const normalized = cache.identify({
				id: data.declineJoinRequest.id,
				__typename: "GroupMember",
			});
			cache.evict({ id: normalized });
			cache.gc();
		},
	});

	return (
		<div className="flex flex-row justify-between">
			<Link to={`/profile/${request.user.id}`} className="w-full">
				<div className="flex flex-row gap-2 w-fit">
					<img
						className="rounded-full w-12 h-12"
						src={request.user.profileImage.url}
						alt=""
					/>
					<div className="flex flex-col gap-2 justify-center">
						<h1 className="font-medium ">
							{S(request.user.firstName + " " + request.user.lastName)
								.titleize()
								.value()}
						</h1>
					</div>
				</div>
			</Link>
			<div className="flex flex-row items-center gap-3">
				<button
					onClick={() => {
						acceptRequest();
					}}
					className="px-3 py-2 bg-green-500 rounded-lg text-white font-medium"
				>
					Accept
				</button>
				<button
					onClick={() => {
						declineRequest();
					}}
					className="px-3 py-2 bg-red-500 rounded-lg text-white font-medium"
				>
					Decline
				</button>
			</div>
		</div>
	);
}
