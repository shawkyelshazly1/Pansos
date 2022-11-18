import React from "react";
import { AiFillHeart, AiFillMessage } from "react-icons/ai";
import { FaShareSquare } from "react-icons/fa";

export default function PostStats() {
	return (
		<div className="flex flex-row gap-6 items-center">
			<div className="flex flex-row gap-1 items-center">
				<AiFillHeart color="#ff4400" size={25} />
				70
			</div>
			<div className="flex flex-row gap-1 items-center">
				<AiFillMessage className="text-secondaryColor" size={25} />
				70
			</div>
			<div className="flex flex-row gap-1 items-center">
				<FaShareSquare className="text-secondaryColor" size={25} />
				70
			</div>
		</div>
	);
}
