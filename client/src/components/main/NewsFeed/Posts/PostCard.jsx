import { Menu } from "@headlessui/react";
import React from "react";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { Link } from "react-router-dom";
import AddCommentSection from "./Comments/AddCommentSection";
import PostMediaCollage from "./Media/PostMediaCollage";
import PostStats from "./PostStats";
import S from "underscore.string";
import moment from "moment";

export default function PostCard({ isOpened, toggleModal, post }) {
	const list = ["media", ""];
	return (
		<div className="flex flex-col gap-4 bg-white  rounded-2xl py-6 px-5 shadow-postCardShadow">
			<div className="flex flex-row items-center justify-between w-full">
				<Link to={`/profile/${post.author.id}`}>
					<div className="flex flex-row  gap-4">
						<img
							className="w-16 rounded-lg object-cover"
							src={post.author.profileImage}
							alt=""
						/>
						<h1 className="font-medium pt-2">
							{S(post.author.firstName + " " + post.author.lastName)
								.titleize()
								.value()}
						</h1>
					</div>
				</Link>
				<div className="flex flex-row gap-4 items-center">
					<span className="text-[#8494c1] text-sm">
						{moment(post.createdAt).fromNow()}
					</span>
					<Menu as="div" className="  inline-block relative  text-left z-[999]">
						<Menu.Button className=" ">
							<div className="flex flex-row gap-4 cursor-pointer">
								<BiDotsHorizontalRounded size={25} />
							</div>
						</Menu.Button>
						<Menu.Items className="absolute flex text-lg font-medium flex-col w-fit py-2 px-4 right-0  origin-top-right bg-white rounded-md shadow-lg ">
							<Menu.Item>
								{({ active }) => (
									<Link className={`${active && "text-red-500"}`} to={"/"}>
										Delete
									</Link>
								)}
							</Menu.Item>
						</Menu.Items>
					</Menu>
				</div>
			</div>
			{list[Math.floor(Math.random() * list.length)] === "media" ? (
				<PostMediaCollage />
			) : (
				<></>
			)}
			<p>{post.content}</p>
			<hr />
			<div className="flex flex-row justify-between gap-6">
				<AddCommentSection />
				<PostStats isOpened={isOpened} toggleModal={toggleModal} post={post} />
			</div>
		</div>
	);
}
