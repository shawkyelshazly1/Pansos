import React from "react";

export default function AccountStatsSection() {
	return (
		<>
			<div className="relative  flex flex-col">
				<img
					className="w-full h-36 rounded-lg object-cover"
					src="https://i.pinimg.com/originals/9e/8d/74/9e8d747819250be17bff875604223894.jpg"
					alt=""
				/>
				<div className="flex absolute flex-row gap-4 items-end left-[8%] bottom-[-50%]">
					<img
						className="w-[6rem] h-[6rem] rounded-lg object-cover "
						src="https://i.postimg.cc/x80sFWLz/download-1.jpg"
						alt=""
					/>
					<div className="flex flex-col gap-1 py-1">
						<h1 className="font-semibold text-xl text-[#192252]">
							Shawky Ahmed
						</h1>
						<p className="text-sm text-slate-400">A crazy boy playing around</p>
					</div>
				</div>
			</div>
			<div className="flex flex-row justify-between px-10 mt-[70px]">
				<div className="flex flex-col items-center">
					<h1 className="text-2xl font-semibold text-[#192252]">11K</h1>
					<h1 className="text-lg  text-[#848fac]">Followers</h1>
				</div>
				<div className="flex flex-col items-center">
					<h1 className="text-2xl font-semibold text-[#192252]">1.4K</h1>
					<h1 className="text-lg  text-[#848fac]">Following</h1>
				</div>
			</div>
		</>
	);
}
