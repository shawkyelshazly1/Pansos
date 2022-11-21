import React from "react";
import MediaPreviewCard from "./MediaPreviewCard";

export default function MediaPreviewContainer({ media, removeMedia }) {
	return (
		<div className="flex flex-row gap-2 h-full flex-wrap">
			{media.map((file) => (
				<MediaPreviewCard
					file={file}
					key={file.previewSrc}
					removeMedia={removeMedia}
				/>
			))}
		</div>
	);
}
