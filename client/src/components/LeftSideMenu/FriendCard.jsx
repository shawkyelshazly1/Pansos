import React from "react";

export default function FriendCard() {
	let test = ["online", ""];
	const status = test[Math.floor(Math.random() * test.length)];
	return (
		<div className="flex felx-row gap-3 items-center cursor-pointer justify-between">
			<div className="flex flex-row gap-3 items-center">
				<img
					className="w-10 rounded-lg object-cover"
					src="https://i.postimg.cc/4yc4NfPr/hacker-team-esport-logo-177315-79-1.webp"
					alt=""
				/>
				<h1 className="text-[#53596d] font-medium">Ahmed Mohamed</h1>
			</div>
			{status === "online" ? (
				<span className="bg-[#27ae60] w-[10px] h-[10px] rounded-full"></span>
			) : (
				<p className="text-xs text-[#53596d] font-medium">8 min</p>
			)}
		</div>
	);
}
