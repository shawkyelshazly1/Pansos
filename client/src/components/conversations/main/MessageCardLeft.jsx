import React from "react";

export default function MessageCardLeft({ message }) {
	return (
		<div className="flex flex-row gap-4 items-end lg:max-w-[40%] max-w-[70%]">
			<img
				className="w-8 h-8 rounded-full"
				src={message.author.profileImage.url}
				alt=""
			/>

			<h1 className="px-6 py-4 rounded-3xl bg-bgColor rounded-bl-none">
				{message.content}
			</h1>
		</div>
	);
}
