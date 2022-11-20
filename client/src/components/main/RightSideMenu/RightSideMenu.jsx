import React from "react";
import AccountStatsSection from "./AccountStats/AccountStatsSection";
import NewPostSection from "./AccountStats/AddPostSection/NewPostSection";
import NotificationsSection from "./Notifications/NotificationsSection";

export default function RightSideMenu() {
	return (
		<div className="hidden xl:flex flex-col h-[calc(100vh-105px)]  2xl:w-[20%]  w-[25%] gap-6 overflow-hidden">
			<div className="flex flex-col bg-white rounded-2xl py-6 px-5 gap-5">
				<AccountStatsSection />
				<NewPostSection />
			</div>
			<NotificationsSection />
		</div>
	);
}
