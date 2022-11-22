import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function ImageCard({ media, togglePostModal, selectPost }) {
	return (
		<div>
			{/* <img
				
				
				src={media}
				alt=""
			/> */}
			<LazyLoadImage
				src={media}
				className="cursor-pointer max-h-[600px] w-full"
				onClick={() => {
					togglePostModal(true);
					selectPost();
				}}
			/>
		</div>
	);
}
