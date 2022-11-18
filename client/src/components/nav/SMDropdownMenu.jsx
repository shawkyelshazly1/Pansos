import React from "react";
import { Menu } from "@headlessui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

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
						<Link
							className={`${active && "text-mainColor"}`}
							to={"/profile/123456"}
						>
							Profile
						</Link>
					)}
				</Menu.Item>
				<Menu.Item>
					{({ active }) => (
						<Link
							className={`${active && "text-mainColor"}`}
							to={"/notifications"}
						>
							Notifications
						</Link>
					)}
				</Menu.Item>
				<Menu.Item>
					{({ active }) => (
						<Link className={`${active && "text-mainColor"}`} to={"/logout"}>
							Logout
						</Link>
					)}
				</Menu.Item>
			</Menu.Items>
		</Menu>
	);
}
