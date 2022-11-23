import React, { useEffect, useState } from "react";
import {
	BsFillArrowLeftCircleFill,
	BsFillArrowRightCircleFill,
} from "react-icons/bs";

export default function PostModaMediaViewer({ post }) {
	console.log(post);
	if (post.media.length < 1) return;

	const [current, setcurrent] = useState(0);
	let length = post.media.length;

	const switchSlide = (variant) => {
		setcurrent(
			current + variant >= length || current + variant < 0
				? current
				: current + variant
		);
	};

	useEffect(() => {
		setcurrent(0);
		length = post.media.length;
	}, [post.media]);

	return (
		<div className="min-h-[60%]  bg-black flex flex-1 p-6 items-center justify-center">
			<BsFillArrowLeftCircleFill
				className="text-white cursor-pointer"
				size={40}
				onClick={() => {
					switchSlide(-1);
				}}
			/>
			<div className="flex-1 items-center justify-center flex">
				<img src={post.media[current].url} alt="" />
			</div>
			<BsFillArrowRightCircleFill
				className="text-white cursor-pointer"
				size={40}
				onClick={() => {
					switchSlide(1);
				}}
			/>
		</div>
	);
}
