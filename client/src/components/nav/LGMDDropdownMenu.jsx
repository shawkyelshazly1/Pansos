import React, { useContext } from "react";
import { Menu } from "@headlessui/react";
import { TiArrowSortedDown } from "react-icons/ti";
import { Link } from "react-router-dom";
import { currentUserContext } from "../../contexts/CurrentUserContext";
import s from "underscore.string";
import { ChatAppContext } from "../../contexts/ChatContext";

export default function LGMDDropdownMenu() {
	// currentUserContext
	const { logoutUser, currentUser } = useContext(currentUserContext);
	const { IOsocket } = useContext(ChatAppContext);
	return (
		// large and medium screen menu
		<Menu
			as="div"
			className="hidden md:inline-block lg:inline-block relative  text-left z-[999]"
		>
			<Menu.Button className=" ">
				<div className="flex flex-row gap-4 cursor-pointer">
					<h1 className="text-[#192252] font-semibold text-lg">
						{s(currentUser.firstName).capitalize().value()}
					</h1>
					<TiArrowSortedDown size={25} className="text-[#848fac] " />
				</div>
			</Menu.Button>
			<Menu.Items className="absolute flex text-lg font-medium flex-col w-[150%] py-2 px-4 right-0  mt-4 origin-top-right bg-white rounded-md shadow-lg ">
				<Menu.Item>
					{({ active }) => (
						<Link
							className={`${active && "text-mainColor"}`}
							to={`/profile/${currentUser.id}`}
						>
							Profile
						</Link>
					)}
				</Menu.Item>
				<Menu.Item>
					{({ active }) => (
						<span
							className={`${active && "text-mainColor"} cursor-pointer`}
							onClick={() => {
								logoutUser();
								IOsocket.disconnect();
							}}
						>
							Logout
						</span>
					)}
				</Menu.Item>
			</Menu.Items>
		</Menu>
	);
}
