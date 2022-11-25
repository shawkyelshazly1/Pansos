import React from "react";
import { MdPublic } from "react-icons/md";
import { RiGitRepositoryPrivateFill } from "react-icons/ri";
export default function About({ group }) {
	return (
		<div className="w-full lg:w-2/4 flex flex-col bg-white rounded-lg shadow-postCardShadow py-4 px-4 gap-4">
			<h1 className="font-medium text-xl">About This Group</h1>
			<hr className="border-[1px]" />
			<p className="flex flex-col gap-0 justify-center font-medium text-[#555963]">
				{group.groupType === "public" ? (
					<>
						<div className="flex flex-row gap-2 items-center">
							<MdPublic size={15} /> Public Group
						</div>
						<p className="text-sm font-normal ml-6">
							Anyone can see who's in the group and what they post.
						</p>
					</>
				) : (
					<>
						<div className="flex flex-row gap-2 items-center">
							<RiGitRepositoryPrivateFill size={15} /> Private Group
						</div>
						<p className="text-sm font-normal ml-6">
							Only members can see who's in the group and what they post
						</p>
					</>
				)}
			</p>
		</div>
	);
}
