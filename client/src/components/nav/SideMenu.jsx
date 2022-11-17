import React from "react";
import { IoNotifications } from "react-icons/io5";

import UserDropwdown from "./UserDropwdown";

export default function SideMenu() {
	return (
		<div className="flex flex-row gap-4">
			<span className="bg-[#eff3fa] p-1 rounded-lg relative">
				<IoNotifications size={30} color={"#192252"} />
				<span className="rounded-full bg-[#eb5757] w-[10px] h-[10px] absolute top-[6%] right-[18%] border-[1px] border-white"></span>
			</span>
			<div className=" flex flex-row items-center gap-4">
				<img
					className=" object-cover w-[38px] h-[38px] border-2 p-[1px] border-[#c23100] rounded-md"
					src="https://i.postimg.cc/x80sFWLz/download-1.jpg"
					alt=""
				/>
				<UserDropwdown />
				
			</div>
		</div>
	);
}
