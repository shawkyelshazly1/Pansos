import React from "react";

export default function MessageCardRight({ message }) {
	return (
		<div className="flex flex-row gap-4 self-end lg:max-w-[40%] max-w-[70%]">
			<h1 className="px-6 py-4 rounded-3xl bg-mainColor text-white rounded-br-none">
				{message.content}
			</h1>
		</div>
	);
}
