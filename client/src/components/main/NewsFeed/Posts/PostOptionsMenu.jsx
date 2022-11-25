import React from "react";
import { Menu } from "@headlessui/react";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { useMutation } from "@apollo/client";
import { DELETE_POST } from "../../../../graphql/post/mutation";
import toast from "react-hot-toast";

export default function PostOptionsMenu({ postId }) {
	// delete post mutation
	const [deletePost] = useMutation(DELETE_POST, {
		variables: { postId },
		onError: (_) => {
			toast.error("Something went wrong!");
		},
		onCompleted: (_) => {
			toast.success("Post Deleted.");
		},
		update: (cache, { data }) => {
			if (!data) return;

			// normalize the Post and remove from all cache queries
			const normalized = cache.identify({ id: postId, __typename: "Post" });
			cache.evict({ id: normalized });
			cache.gc();
		},
	});
	return (
		<Menu as="div" className="  inline-block relative  text-left z-[99]">
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
								deletePost();
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
