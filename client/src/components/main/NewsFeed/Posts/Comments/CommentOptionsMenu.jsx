import React from "react";
import { Menu } from "@headlessui/react";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { DELETE_COMMENT } from "../../../../../graphql/comment/mutation";
import { useMutation } from "@apollo/client";
import toast from "react-hot-toast";

export default function CommentOptionsMenu({ commentId }) {
	//delete comment mutation
	const [deleteComment] = useMutation(DELETE_COMMENT, {
		variables: { commentId },
		onError: (_) => {
			toast.error("Something went wrong!");
		},
		onCompleted: (_) => {
			toast.success("Comment Deleted!");
		},
		update: (cache, { data }) => {
			if (!data) return;

			// normalize the comment and remove it from the cache
			const normalized = cache.identify({
				id: commentId,
				__typename: "Comment",
			});
			cache.evict({ id: normalized });
			cache.gc();
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
				<Menu.Item>
					{({ active }) => (
						<span
							className={`${active && "text-red-500"} cursor-pointer`}
							onClick={() => {
								deleteComment();
							}}
						>
							Delete
						</span>
					)}
				</Menu.Item>
			</Menu.Items>
		</Menu>
	);
}
