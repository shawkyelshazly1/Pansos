import React from "react";

export default function GroupCard() {
	return (
		<div className="flex felx-row gap-3 items-center cursor-pointer">
			<img
				className="w-10 rounded-lg object-cover"
				src="https://i.postimg.cc/4yc4NfPr/hacker-team-esport-logo-177315-79-1.webp"
				alt=""
			/>
			<h1 className="text-[#53596d] font-medium">Pickolab Studio</h1>
		</div>
	);
}
