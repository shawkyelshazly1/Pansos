import React, { useContext } from "react";
import { currentUserContext } from "../../../../contexts/CurrentUserContext";
import S from "underscore.string";
import numeral from "numeral";

export default function AccountStatsSection() {
	// current user context
	const { currentUser } = useContext(currentUserContext);

	return (
		<>
			<div className="relative  flex flex-col">
				<img
					className="w-full h-36 rounded-lg object-cover"
					src={currentUser.profileCover.url}
					alt=""
				/>
				<div className="flex absolute flex-row gap-4 items-end left-[8%] bottom-[-50%]">
					<img
						className="w-[6rem] h-[6rem] rounded-lg object-cover "
						src={currentUser.profileImage.url}
						alt=""
					/>
					<div className="flex flex-col gap-1 py-1">
						<h1 className="font-semibold text-xl text-[#192252]">
							{S(currentUser.firstName + " " + currentUser.lastName)
								.titleize()
								.value()}
						</h1>
						<p className="text-sm text-slate-400">A crazy boy playing around</p>
					</div>
				</div>
			</div>
			<div className="flex flex-row justify-between px-10 mt-[70px]">
				<div className="flex flex-col items-center">
					<h1 className="text-2xl font-semibold text-[#192252]">
						{numeral(currentUser.followersCount).format("0a")}
					</h1>
					<h1 className="text-lg  text-[#848fac]">Followers</h1>
				</div>
				<div className="flex flex-col items-center">
					<h1 className="text-2xl font-semibold text-[#192252]">
						{numeral(currentUser.followingsCount).format("0a")}
					</h1>
					<h1 className="text-lg  text-[#848fac]">Following</h1>
				</div>
			</div>
		</>
	);
}
