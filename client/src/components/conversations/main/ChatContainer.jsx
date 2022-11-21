import React from "react";
import ChatInput from "./ChatInput";
import MessagesContainer from "./MessagesContainer";

export default function ChatContainer() {
	return (
		<div className="flex flex-1 flex-col gap-4 bg-white shadow-postCardShadow h-full rounded-xl p-6">
			<div className="flex flex-row gap-3 cursor-pointer items-center">
				<img
					className="w-12 rounded-full"
					src="https://i.postimg.cc/9Mj9yQgY/jonespeace-1.webp"
					alt=""
				/>
				<div className="lg:flex flex-col gap-1 pt-2 hidden ">
					<h1 className="font-bold">Shawky Ahmed</h1>
				</div>
			</div>
			<hr />
			<div className="flex flex-col justify-between gap-2 h-full">
				<MessagesContainer />
				<ChatInput />
			</div>
		</div>
	);
}
