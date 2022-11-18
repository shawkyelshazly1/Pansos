import React from "react";
import { IoNotifications } from "react-icons/io5";
import LGMDDropdownMenu from "./LGMDDropdownMenu";
import SMDropdownMenu from "./SMDropdownMenu";

export default function SideMenu() {
	return (
		<div className="flex flex-row gap-4 items-center">
			<span className="bg-[#eff3fa] p-1 rounded-lg relative hidden lg:block md:block">
				<IoNotifications size={30} color={"#192252"} />
				<span className="rounded-full bg-[#eb5757] w-[10px] h-[10px] absolute top-[6%] right-[18%] border-[1px] border-white"></span>
			</span>
			<img
				className=" object-cover w-[38px] h-[38px] border-2 p-[1px] border-[#c23100] rounded-md hidden lg:block md:block"
				src="https://i.postimg.cc/x80sFWLz/download-1.jpg"
				alt=""
			/>

			{/* Menu for large and medium screens */}
			<LGMDDropdownMenu />

			{/* Menu for small screens */}
			<SMDropdownMenu />
		</div>
	);
}
