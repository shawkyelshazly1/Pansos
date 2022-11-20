import React, { useState } from "react";
import { BsImageFill } from "react-icons/bs";
import { MdOutlineOndemandVideo } from "react-icons/md";

import NewPostModal from "./AddPostModal/NewPostModal";

export default function NewPostForm() {
	const [showModal, setShowModal] = useState(true);

	return (
		<>
			<div target="" className="flex flex-col gap-4">
				<textarea
					onClick={(e) => {
						setShowModal(!showModal);
						e.target.blur();
					}}
					rows="2"
					className="focus:outline-none rounded-lg bg-bgColor px-4 py-4 resize-none"
					placeholder="What do you think, Shawky ?"
				></textarea>
				<hr />
				<div className="flex flex-row justify-between gap-6">
					<span
						onClick={() => {
							setShowModal(!showModal);
						}}
						className="cursor-pointer flex relative overflow-hidden bg-bgColor  w-full rounded-lg py-[10px] items-center justify-center text-xl text-[#92a1a8]"
					>
						<BsImageFill size={25} className="mr-4" color="#3ca8e8" />
						Image
					</span>
					<span
						onClick={() => {
							setShowModal(!showModal);
						}}
						className="cursor-pointer flex relative overflow-hidden bg-bgColor  w-full rounded-lg py-[10px] items-center justify-center text-xl text-[#92a1a8]"
					>
						<MdOutlineOndemandVideo
							size={25}
							className="mr-4"
							color="#e84c88"
						/>
						Video/GIF
					</span>
				</div>
			</div>

			<NewPostModal isOpened={showModal} toggleModal={setShowModal} />
		</>
	);
}
