import React from "react";
import { Menu } from "@headlessui/react";
import { GiHamburgerMenu } from "react-icons/gi";

export default function SMDropdownMenu() {
	return (
		//  small screen menu

		<Menu
			as="div"
			className="relative lg:hidden md:hidden inline-block text-left z-[999]"
		>
			<Menu.Button className=" ">
				<div className="flex flex-row gap-4 cursor-pointer">
					<GiHamburgerMenu size={30} className="text-[#848fac] " />
				</div>
			</Menu.Button>
			<Menu.Items className="absolute flex  text-lg font-medium flex-col w-fit py-2 px-6 right-0  mt-4 origin-top-right bg-white rounded-md shadow-lg ">
				<Menu.Item>
					{({ active }) => (
						<a
							className={`${active && "text-mainColor"}`}
							href="/profile/123456"
						>
							Profile
						</a>
					)}
				</Menu.Item>
				<Menu.Item>
					{({ active }) => (
						<a
							className={`${active && "text-mainColor"}`}
							href="/notifications"
						>
							Notifications
						</a>
					)}
				</Menu.Item>
				<Menu.Item>
					{({ active }) => (
						<a className={`${active && "text-mainColor"}`} href="/logout">
							Logout
						</a>
					)}
				</Menu.Item>
			</Menu.Items>
		</Menu>
	);
}
