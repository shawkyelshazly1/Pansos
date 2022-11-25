import React from "react";
import GroupNavigationMenu from "./GroupSectionSelector";
import HeaderMenu from "./HeaderMenu";

export default function GroupHeader({ group }) {
	return (
		<div className=" w-full flex flex-col gap-6 bg-white  px-8  rounded-xl shadow-postCardShadow pt-6  ">
			<div className="relative items-center flex justify-center w-full ">
				<img
					className=" object-cover  rounded-xl w-full min-h-[200px] max-h-[350px]"
					src={group.photo.url}
					alt=""
				/>
			</div>
			<HeaderMenu group={group} />
		</div>
	);
}
