import React from "react";

export default function ImageCard({ media, togglePostModal, selectPost }) {
	return (
		<div>
			<img
				onClick={() => {
					togglePostModal(true);
					selectPost();
				}}
				className="cursor-pointer max-h-[600px] w-full "
				src={media}
				alt=""
			/>
		</div>
	);
}
