import { useMutation } from "@apollo/client";
import { Menu } from "@headlessui/react";
import React from "react";
import toast from "react-hot-toast";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import {
	DELETE_FOLLOW,
	SEND_FOLLOW_REQUEST,
} from "../../../../graphql/friendship/mutation";

export default function UserCardMenu({ user }) {
	// follow User Mutation
	//mutation to follow user
	const [followUser] = useMutation(SEND_FOLLOW_REQUEST, {
		variables: { userId: user.id },
		onError: (_) => {
			toast.error("Something Went Wrong!");
		},
		onCompleted: (_) => {
			toast.success("Follow Request Sent Successfully.");
		},
	});

	// unfollow user Mutation
	const [unFollowUser] = useMutation(DELETE_FOLLOW, {
		variables: { userId: user.id },
		onError: (_) => {
			toast.error("Something Went Wrong!");
		},
		onCompleted: (_) => {
			toast.success("User UnFollowed Successfully.");
		},
	});

	return (
		<Menu as="div" className="  inline-block relative  text-left z-[999]">
			<Menu.Button className=" ">
				<div className="flex flex-row gap-4 cursor-pointer">
					<BiDotsHorizontalRounded size={25} />
				</div>
			</Menu.Button>
			<Menu.Items className="absolute flex text-lg font-medium flex-col w-fit py-2 px-4 right-0  origin-top-right bg-white rounded-md shadow-lg ">
				{user.followStatus === "approved" ? (
					<Menu.Item>
						{({ active }) => (
							<span
								className={`${active && "text-red-500"} cursor-pointer`}
								onClick={() => {
									unFollowUser();
								}}
							>
								UnFollow
							</span>
						)}
					</Menu.Item>
				) : user.followStatus === "notFollowed" ? (
					<Menu.Item>
						{({ active }) => (
							<span
								className={`${active && "text-red-500"} cursor-pointer`}
								onClick={() => {
									followUser();
								}}
							>
								Follow
							</span>
						)}
					</Menu.Item>
				) : (
					""
				)}
			</Menu.Items>
		</Menu>
	);
}
