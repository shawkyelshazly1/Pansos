import React from "react";

export default function StoryCircle() {
	const list = [
		"https://i.postimg.cc/9Mj9yQgY/jonespeace-1.webp",
		"https://i.postimg.cc/x80sFWLz/download-1.jpg",
	];

	return (
		<div className="border-2 border-[#c23100] rounded-full p-[2px] shrink-0 cursor-pointer ">
			<img
				className="rounded-full object-cover w-20 h-20"
				src={list[Math.floor(Math.random() * list.length)]}
				alt=""
			/>
		</div>
	);
}
