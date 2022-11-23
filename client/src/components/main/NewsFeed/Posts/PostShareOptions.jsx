import { useMutation } from "@apollo/client";
import { Menu } from "@headlessui/react";
import React from "react";
import toast from "react-hot-toast";
import { FaEdit, FaShareSquare } from "react-icons/fa";
import { SHARE_POST } from "../../../../graphql/post/mutation";
import { LOAD_NEWSFEED } from "../../../../graphql/post/query";

export default function PostShareOptions({ post }) {
	// share post mutation
	const [sharePost] = useMutation(SHARE_POST, {
		onError: (_) => {
			console.log(_);
			toast.error("Something Went Wrong!");
		},
		onCompleted: (_) => {
			toast.success("Post Shared Successfully!");
		},
		update: (cache, { data }) => {
			cache.modify({
				fields: {
					getUserNewsfeed(existingPosts = []) {
						const { addSharedPost } = data;
						cache.writeQuery({
							query: LOAD_NEWSFEED,
							data: { addSharedPost, existingPosts },
						});
					},
				},
			});
		},
	});

	return (
		<Menu
			as="div"
			className="  relative  text-left z-[999] items-center justify-center w-full h-full flex "
		>
			<Menu.Button className=" ">
				<div className="flex flex-row gap-4 cursor-pointer justify-center items-center">
					<FaShareSquare className="text-secondaryColor" size={25} />
				</div>
			</Menu.Button>
			<Menu.Items className="absolute flex items-center justify-center font-medium flex-col w-[13rem]  py-2 px-4 right-0 top-8  origin-top-left bg-white rounded-md shadow-lg ">
				<Menu.Item>
					{({ active }) => (
						<span
							className={`${
								active && "text-red-500"
							} cursor-pointer flex flex-row gap-2 items-center justify-center`}
							onClick={() => {
								post.is_shared
									? sharePost({ variables: { post: post.post.id } })
									: sharePost({ variables: { post: post.id } });
							}}
						>
							<FaShareSquare className="text-black" size={15} />
							Share Now
						</span>
					)}
				</Menu.Item>
				<Menu.Item>
					{({ active }) => (
						<span
							className={`${
								active && "text-red-500"
							} cursor-pointer flex flex-row gap-2 items-center justify-center`}
							onClick={() => {}}
						>
							<FaEdit className="text-black" size={15} />
							Share With Content
						</span>
					)}
				</Menu.Item>
			</Menu.Items>
		</Menu>
	);
}
