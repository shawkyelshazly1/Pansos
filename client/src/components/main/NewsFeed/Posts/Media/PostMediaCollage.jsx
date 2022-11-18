import React, { useEffect } from "react";
import Masonry from "react-masonry-css";
import ImageCard from "./ImageCard";
import ImageCardWithOverlay from "./ImageCardWithOverlay";

export default function PostMediaCollage() {
	let images = Math.floor(Math.random() * 10);

	return (
		<>
			{images < 5 ? (
				<Masonry
					breakpointCols={2}
					className="my-masonry-grid"
					columnClassName="my-masonry-grid_column"
				>
					{Array.from({ length: images }, (_, i) => (
						<ImageCard />
					))}
				</Masonry>
			) : (
				<Masonry
					breakpointCols={2}
					className="my-masonry-grid"
					columnClassName="my-masonry-grid_column"
				>
					{Array.from({ length: 3 }, (_, i) => (
						<ImageCard />
					))}
					<ImageCardWithOverlay />
				</Masonry>
			)}
		</>
	);
}
