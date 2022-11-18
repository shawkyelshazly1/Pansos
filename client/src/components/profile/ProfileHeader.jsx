import React, { useState } from "react";
import HeaderMenu from "./HeaderMenu";

export default function ProfileHeader() {
	return (
		<div className=" w-[90%] flex flex-col gap-4 bg-white  px-8  rounded-xl shadow-postCardShadow py-6  ">
			<div className="relative items-center flex justify-center w-full ">
				<img
					className=" object-cover  rounded-xl w-full min-h-[200px] max-h-[350px]"
					src="https://html.crumina.net/html-olympus/img/top-header1.webp"
					alt=""
				/>
				<div className="absolute bottom-[-2rem]  border-4 rounded-full border-white">
					<img
						className="rounded-full w-24 h-24 lg:w-36 lg:h-36 object-cover"
						src="https://i.postimg.cc/x80sFWLz/download-1.jpg"
						alt=""
					/>
				</div>
			</div>
			<HeaderMenu />
		</div>
	);
}
