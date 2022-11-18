import React from "react";
import { Link } from "react-router-dom";

export default function AddCommentSection() {
	return (
		<div className="flex flex-1 flex-row gap-4 items-center ">
			<Link to={"/profile/1223456"}>
				<img
					className="w-10 h-10 rounded-lg object-cover"
					src="https://i.postimg.cc/x80sFWLz/download-1.jpg"
					alt=""
				/>
			</Link>
			<form className="w-full flex h-full">
				<input
					type="text"
					className="focus:outline-none bg-bgColor w-full rounded-lg px-6 py-2"
					placeholder="Add comment ..."
				/>
			</form>
		</div>
	);
}
