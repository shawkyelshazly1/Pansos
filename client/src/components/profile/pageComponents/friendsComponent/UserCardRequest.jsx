import { useMutation } from "@apollo/client";
import React from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import S from "underscore.string";
import {
	ACCEPT_REQUEST,
	DECLINE_REQUEST,
} from "../../../../graphql/friendship/mutation";

export default function UserCardRequest({ user }) {
	// mutation to accept follow UserCardRequest
	const [acceptRequest] = useMutation(ACCEPT_REQUEST, {
		variables: { userId: user.id },
		onError: (_) => {
			toast.error("Something Went Wrong!");
		},
		onCompleted: (_) => {
			toast.success("Follow Request Accepted!");
		},
		update: (cache, { data }) => {
			if (!data) return;
			// normalize relation ship to use it with cache
			const normalized = cache.identify({
				id: data.acceptFollowRequest.id,
				__typename: "Friendship",
			});
			cache.evict({ id: normalized });
			cache.gc();
		},
	});

	// mutation to decline follow request
	const [declineRequest] = useMutation(DECLINE_REQUEST, {
		variables: { userId: user.id },
		onError: (_) => {
			toast.error("Something Went Wrong!");
		},
		onCompleted: (_) => {
			toast.success("Follow Request Declined!");
		},
		update: (cache, { data }) => {
			if (!data) return;
			// normalize relation ship to use it with cache
			const normalized = cache.identify({
				id: data.declineFollowRequest.id,
				__typename: "Friendship",
			});
			cache.evict({ id: normalized });
			cache.gc();
		},
	});

	return (
		<div className="flex flex-row gap-4 justify-between border-[1px] rounded-lg p-2">
			<Link to={`/profile/${user.id}`}>
				<div className="flex flex-row gap-4">
					<img className="w-24 rounded-lg" src={user.profileImage.url} alt="" />
					<h1 className="text-lg text-[#192252] mt-2 font-semibold hover:text-mainColor">
						{S(user.firstName + " " + user.lastName)
							.titleize()
							.value()}
					</h1>
				</div>
			</Link>
			<div className="flex flex-row gap-4 items-center justify-center">
				<button
					onClick={() => {
						acceptRequest();
					}}
					className="rounded-lg bg-green-500 text-white font-medium py-2 px-4"
				>
					Accpet
				</button>
				<button
					onClick={() => {
						declineRequest();
					}}
					className="rounded-lg bg-red-500 text-white font-medium py-2 px-4"
				>
					Decline
				</button>
			</div>
		</div>
	);
}
