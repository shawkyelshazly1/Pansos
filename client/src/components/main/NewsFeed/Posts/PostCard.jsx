import { Menu } from "@headlessui/react";
import React from "react";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { Link } from "react-router-dom";
import AddCommentSection from "./Comments/AddCommentSection";
import PostMediaCollage from "./Media/PostMediaCollage";
import PostStats from "./PostStats";

export default function PostCard({ isOpened, toggleModal }) {
	const list = ["media", ""];
	return (
		<div className="flex flex-col gap-4 bg-white  rounded-2xl py-6 px-5 shadow-postCardShadow">
			<div className="flex flex-row items-center justify-between w-full">
				<Link to={"/profile/1223456"}>
					<div className="flex flex-row  gap-4">
						<img
							className="w-16 rounded-lg object-cover"
							src="https://i.postimg.cc/9Mj9yQgY/jonespeace-1.webp"
							alt=""
						/>
						<h1 className="font-medium pt-2">Ahmed Mohamed</h1>
					</div>
				</Link>
				<div className="flex flex-row gap-4 items-center">
					<span>3 minutes ago</span>
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
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
				impedit blanditiis eiu🚀! Magnam deleniti temporibus sint alias id
				delectus, ad autem? Accusamus repellat repellendus a dolorem😊😊que
				velit repudiandae tenetur itaque! Lorem ipsum dolor sit amet consectetur
				adipisicing elit. Deleniti cum natus exercitationem hic accusantium
				quos, iure eligen✈️di assumenda nesciunt culpa in consectetur quas
				doloribus eos harum explicabo nulla dicta praesentium.
			</p>
			<hr />
			<div className="flex flex-row justify-between gap-6">
				<AddCommentSection />
				<PostStats isOpened={isOpened} toggleModal={toggleModal} />
			</div>
		</div>
	);
}
