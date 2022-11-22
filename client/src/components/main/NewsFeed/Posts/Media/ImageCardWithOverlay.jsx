import React from "react";

export default function ImageCardWithOverlay({
	media,
	togglePostModal,
	selectPost,
}) {
	return (
		<div className="relative">
			<div
				onClick={() => {
					togglePostModal(true);
					selectPost();
				}}
				className="cursor-pointer w-full h-full absolute top-0 left-0 flex items-center justify-center text-xl"
			>
				<h1 className="text-white text-5xl z-[999]">+{media.length - 3}</h1>
				<div className=" bg-gray-800 opacity-60 w-full h-full absolute "></div>
			</div>
			<img
				className=" max-h-[600px] w-full object-cover "
				src={media[3]}
				alt=""
			/>
		</div>
	);
}
