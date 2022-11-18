import React from "react";

export default function NotificationCard() {
	return (
		<>
			<div className="flex felx-row gap-3 items-center cursor-pointer">
				<img
					className="w-12 rounded-lg object-cover"
					src="https://i.postimg.cc/4yc4NfPr/hacker-team-esport-logo-177315-79-1.webp"
					alt=""
				/>
				<p className="text-[#53596d] text-sm">
					<strong>Ahmed Mostafa</strong> just reacted to your post with 24
					others.
				</p>
			</div>
			<hr />
		</>
	);
}
