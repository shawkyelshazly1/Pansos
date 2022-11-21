import React from "react";
import { useParams } from "react-router";

export default function ChatCard({
	setSelecetedConversation,
	selectedConversation,
}) {
	const { userId } = useParams();

	// if userId in conversations participants highlight with BG
	return (
		<div className="flex flex-row gap-3 cursor-pointer bg-[#e2e5f5] py-2 lg:px-3 rounded-xl px-2 ">
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
