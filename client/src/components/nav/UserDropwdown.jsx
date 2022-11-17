import React from "react";
import { Menu } from "@headlessui/react";
import { TiArrowSortedDown } from "react-icons/ti";
export default function UserDropwdown() {
	return (
		<Menu as="div" className="relative inline-block text-left">
			<Menu.Button className=" ">
				<div className="flex flex-row gap-4 cursor-pointer">
					<h1 className="text-[#192252] font-semibold text-lg">Shawky</h1>
					<TiArrowSortedDown size={25} className="text-[#848fac] " />
				</div>
			</Menu.Button>
			<Menu.Items className="absolute flex text-lg font-medium flex-col w-[150%] py-2 px-4 right-0  mt-4 origin-top-right bg-white rounded-md shadow-lg ">
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
						<a className={`${active && "text-mainColor"}`} href="/logout">
							Logout
						</a>
					)}
				</Menu.Item>
			</Menu.Items>
		</Menu>
	);
}
