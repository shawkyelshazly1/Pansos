import React from "react";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import NotificationCard from "./NotificationCard";

export default function NotificationsSection() {
	return (
		<div className="flex flex-col bg-white rounded-2xl py-6 px-5 gap-6">
			<div className="flex flex-row justify-between items-center">
				<h1 className="text-[#848fac] font-medium">Latest Notifications</h1>
				<BiDotsHorizontalRounded size={25} />
			</div>
			<div className="flex flex-col gap-4">
				<NotificationCard />
				<NotificationCard />
			</div>
		</div>
	);
}
