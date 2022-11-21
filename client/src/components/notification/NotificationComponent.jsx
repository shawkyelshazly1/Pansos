import { Menu } from "@headlessui/react";
import React from "react";
import { IoNotifications } from "react-icons/io5";
import NotificationCard from "../main/RightSideMenu/Notifications/NotificationCard";

export default function NotificationComponent() {
	return (
		<Menu as="div" className="relative inline-block text-left z-[9999] ">
			<Menu.Button className=" ">
				<div className="flex flex-row gap-4 cursor-pointer">
					<span className="bg-[#eff3fa] p-1 rounded-lg relative hidden lg:block md:block">
						<IoNotifications size={30} color={"#192252"} />
						<span className="rounded-full bg-[#eb5757] w-[10px] h-[10px] absolute top-[6%] right-[18%] border-[1px] border-white"></span>
					</span>
				</div>
			</Menu.Button>
			<Menu.Items className="absolute min-w-[400px] flex  text-lg font-medium overflow-y-scroll max-h-[calc(100vh-27vh)] flex-col gap-3 max-w-fit py-2 px-6 right-0 origin-top-right bg-white rounded-md shadow-lg ">
				<h1 className="text-[#848fac] font-medium text-2xl">Notifications</h1>
				<Menu.Item>{({ active }) => <NotificationCard />}</Menu.Item>
				<Menu.Item>{({ active }) => <NotificationCard />}</Menu.Item>
				<Menu.Item>{({ active }) => <NotificationCard />}</Menu.Item>
				<Menu.Item>{({ active }) => <NotificationCard />}</Menu.Item>
				<Menu.Item>{({ active }) => <NotificationCard />}</Menu.Item>
				<Menu.Item>{({ active }) => <NotificationCard />}</Menu.Item>
				<Menu.Item>{({ active }) => <NotificationCard />}</Menu.Item>
				<Menu.Item>{({ active }) => <NotificationCard />}</Menu.Item>
				<Menu.Item>{({ active }) => <NotificationCard />}</Menu.Item>
				<Menu.Item>{({ active }) => <NotificationCard />}</Menu.Item>
				<Menu.Item>{({ active }) => <NotificationCard />}</Menu.Item>
				<Menu.Item>{({ active }) => <NotificationCard />}</Menu.Item>
				<Menu.Item>{({ active }) => <NotificationCard />}</Menu.Item>
				<Menu.Item>{({ active }) => <NotificationCard />}</Menu.Item>
				<Menu.Item>{({ active }) => <NotificationCard />}</Menu.Item>
				<Menu.Item>{({ active }) => <NotificationCard />}</Menu.Item>
				<Menu.Item>{({ active }) => <NotificationCard />}</Menu.Item>
				<Menu.Item>{({ active }) => <NotificationCard />}</Menu.Item>
				<Menu.Item>{({ active }) => <NotificationCard />}</Menu.Item>
				<Menu.Item>{({ active }) => <NotificationCard />}</Menu.Item>
				<Menu.Item>{({ active }) => <NotificationCard />}</Menu.Item>
				<Menu.Item>{({ active }) => <NotificationCard />}</Menu.Item>
				<Menu.Item>{({ active }) => <NotificationCard />}</Menu.Item>
				<Menu.Item>{({ active }) => <NotificationCard />}</Menu.Item>
			</Menu.Items>
		</Menu>
	);
}
