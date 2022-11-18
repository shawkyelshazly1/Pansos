import React, { useState } from "react";
import { BsImageFill } from "react-icons/bs";
import { MdOutlineOndemandVideo } from "react-icons/md";
import LoadingSpinner from "../../utils/LoadingSpinner";
import { Player } from "@lottiefiles/react-lottie-player";

export default function NewPostSection() {
	// status for posting animation
	const [currentStatus, setCurrentStatus] = useState("idle");

	if (currentStatus === "idle")
		return (
			<form className="flex flex-col gap-4">
				<textarea
					required
					name="postContent"
					id="postContent"
					rows="2"
					className="focus:outline-none rounded-lg bg-bgColor px-4 py-4 resize-none"
					placeholder="What do you think, Shawky ?"
				></textarea>
				<hr />
				<div className="flex flex-row justify-between gap-6">
					<span className=" flex relative overflow-hidden bg-bgColor  w-full rounded-lg py-[10px] items-center justify-center text-xl text-[#92a1a8]">
						<BsImageFill size={25} className="mr-4" color="#3ca8e8" />
						Image
						<input
							className="cursor-pointer absolute top-0 right-0 block  opacity-0"
							type="file"
							accept=".jpg,.jpeg,.png"
							name="photoUpload"
							id="photoUpload"
							multiple
						/>
					</span>
					<span className=" flex relative overflow-hidden bg-bgColor  w-full rounded-lg py-[10px] items-center justify-center text-xl text-[#92a1a8]">
						<MdOutlineOndemandVideo
							size={25}
							className="mr-4"
							color="#e84c88"
						/>
						Video/GIF
						<input
							className="cursor-pointer absolute top-0 right-0 block  opacity-0"
							type="file"
							accept=".gif,.mp4,.mov,.mkv,.avi,.mpeg,.wmv"
							name="photoUpload"
							id="photoUpload"
							multiple
						/>
					</span>
				</div>
				<button
					type="submit"
					onClick={() => {
						setCurrentStatus("loading");
					}}
					className="w-full text-white bg-[#fd8e5e] py-[6px] rounded-lg text-2xl font-semibold "
				>
					Post
				</button>
			</form>
		);
	else if (currentStatus === "loading") {
		const timer = setTimeout(() => {
			setCurrentStatus("completed");
			clearTimeout(timer);
		}, 3000);
		return <LoadingSpinner />;
	} else if (currentStatus === "completed") {
		const timer = setTimeout(() => {
			setCurrentStatus("idle");
			clearTimeout(timer);
		}, 3000);
		return (
			<Player
				autoplay
				loop
				src="https://assets10.lottiefiles.com/packages/lf20_iuonzj99.json"
				style={{ height: "200px", width: "200px" }}
			></Player>
		);
	}
}
