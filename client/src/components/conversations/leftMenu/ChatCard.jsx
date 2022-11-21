import React from "react";

export default function ChatCard({
	setSelecetedConversation,
	selectedConversation,
}) {
	return (
		<div className="flex flex-row gap-3 cursor-pointer bg-[#f4f6fe] py-2 px-3 rounded-xl">
			<img
				className="max-w-[4rem] max-h-[4rem] rounded-full object-cover"
				src="https://i.postimg.cc/9Mj9yQgY/jonespeace-1.webp"
				alt=""
			/>
			<div className="lg:flex flex-col gap-1 pt-2 hidden ">
				<h1 className="font-bold">Shawky Ahmed</h1>
				<div className="flex flex-row justify-between items-center gap-2">
					<p className="text-sm">You: This is Last Message</p>
					<span className="text-sm">5m</span>
				</div>
			</div>
		</div>
	);
}
