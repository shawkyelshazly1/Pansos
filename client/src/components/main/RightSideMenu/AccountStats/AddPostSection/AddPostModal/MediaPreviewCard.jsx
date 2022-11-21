import React from "react";
import { IoMdCloseCircle } from "react-icons/io";

export default function MediaPreviewCard({ file, removeMedia }) {
	return (
		<div className="relative">
			<IoMdCloseCircle
				size={25}
				className="absolute right-0 top-0 cursor-pointer text-black"
				onClick={() => {
					removeMedia(file);
				}}
			/>
			<img
				className="object-cover w-28 rounded-lg"
				src={file.previewSrc}
				alt=""
			/>
		</div>
	);
}
