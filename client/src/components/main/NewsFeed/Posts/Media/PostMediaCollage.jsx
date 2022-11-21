import React, { useEffect } from "react";
import Masonry from "react-masonry-css";
import ImageCard from "./ImageCard";
import ImageCardWithOverlay from "./ImageCardWithOverlay";

export default function PostMediaCollage({
	media,
	togglePostModal,
	selectPost,
}) {
	return (
		<>
			{media.length < 5 ? (
				<Masonry
					breakpointCols={2}
					className="my-masonry-grid"
					columnClassName="my-masonry-grid_column"
				>
					{media.map((media, i) => (
						<ImageCard
							togglePostModal={togglePostModal}
							selectPost={selectPost}
							media={media}
							key={i}
						/>
					))}
				</Masonry>
			) : (
				<Masonry
					breakpointCols={2}
					className="my-masonry-grid"
					columnClassName="my-masonry-grid_column"
				>
					{media.slice(0, 3).map((media, i) => (
						<ImageCard
							togglePostModal={togglePostModal}
							selectPost={selectPost}
							media={media}
							key={i}
						/>
					))}

					<ImageCardWithOverlay
						togglePostModal={togglePostModal}
						selectPost={selectPost}
						media={media}
					/>
				</Masonry>
			)}
		</>
	);
}
