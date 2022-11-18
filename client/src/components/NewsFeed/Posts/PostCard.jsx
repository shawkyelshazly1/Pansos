import React from "react";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import AddCommentSection from "./Comments/AddCommentSection";
import PostMediaCollage from "./Media/PostMediaCollage";
import PostStats from "./PostStats";

export default function PostCard({ isOpened, toggleModal }) {
	const list = ["media", ""];
	return (
		<div className="flex flex-col gap-4 bg-white  rounded-2xl py-6 px-5 shadow-postCardShadow">
			<div className="flex flex-row items-center justify-between w-full">
				<div className="flex flex-row  gap-4">
					<img
						className="w-16 rounded-lg object-cover"
						src="https://i.postimg.cc/9Mj9yQgY/jonespeace-1.webp"
						alt=""
					/>
					<h1 className="font-medium pt-2">Ahmed Mohamed</h1>
				</div>
				<div className="flex flex-row gap-4 items-center">
					<span>3 minutes ago</span>
					<BiDotsHorizontalRounded size={25} />
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
