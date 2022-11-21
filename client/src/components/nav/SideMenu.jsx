import React, { useContext } from "react";
import { IoNotifications } from "react-icons/io5";
import { Link } from "react-router-dom";
import { currentUserContext } from "../../contexts/CurrentUserContext";
import NotificationComponent from "../notification/NotificationComponent";
import LGMDDropdownMenu from "./LGMDDropdownMenu";
import SMDropdownMenu from "./SMDropdownMenu";

export default function SideMenu() {
	// currentUserContext
	const { currentUser } = useContext(currentUserContext);

	return (
		<div className="flex flex-row gap-4 items-center">
			<NotificationComponent />

			<Link to={`/profile/${currentUser.id}`}>
				<img
					className="  w-[38px] h-[38px] border-2 p-[1px] border-[#c23100] rounded-md hidden lg:block md:block"
					src={currentUser.profileImage}
					alt=""
				/>
			</Link>

			{/* Menu for large and medium screens */}
			<LGMDDropdownMenu />

			{/* Menu for small screens */}
			<SMDropdownMenu />
		</div>
	);
}
