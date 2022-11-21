import React from "react";

export default function ImageCard({ media }) {
	return (
		<div>
			<img className="max-h-[600px] w-full " src={media} alt="" />
		</div>
	);
}
