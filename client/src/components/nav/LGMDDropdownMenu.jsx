import React from "react";
import { Menu } from "@headlessui/react";
import { TiArrowSortedDown } from "react-icons/ti";
import { Link } from "react-router-dom";

export default function LGMDDropdownMenu() {
	return (
		// large and medium screen menu

		<Menu
			as="div"
			className="hidden md:inline-block lg:inline-block relative  text-left z-[999]"
		>
			<Menu.Button className=" ">
				<div className="flex flex-row gap-4 cursor-pointer">
					<h1 className="text-[#192252] font-semibold text-lg">Shawky</h1>
					<TiArrowSortedDown size={25} className="text-[#848fac] " />
				</div>
			</Menu.Button>
			<Menu.Items className="absolute flex text-lg font-medium flex-col w-[150%] py-2 px-4 right-0  mt-4 origin-top-right bg-white rounded-md shadow-lg ">
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
						<Link className={`${active && "text-mainColor"}`} to={"/logout"}>
							Logout
						</Link>
					)}
				</Menu.Item>
			</Menu.Items>
		</Menu>
	);
}
