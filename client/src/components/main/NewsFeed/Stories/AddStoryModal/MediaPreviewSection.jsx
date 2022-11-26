import React from "react";
import { BsImageFill, BsTrashFill } from "react-icons/bs";

export default function MediaPreviewSection({ media, setMedia }) {
	// add selected media to media & mediaPreviews
	const addMedia = (files) => {
		console.log(files);
		let updatedMedia = [];
		if (files[0]) {
			let previewSrc = URL.createObjectURL(files[0]);
			updatedMedia.push({ file: files[0], previewSrc });
		}

		setMedia([...updatedMedia]);
	};

	// remove selected media from media & mediaPreviews
	const removeMedia = (file) => {
		let updatedMedia = [...media];
		updatedMedia = updatedMedia.filter((media) => media !== file);
		setMedia(updatedMedia);
	};

	return (
		<div className="flex flex-col flex-1 items-center gap-4">
			<span className="cursor-pointer flex relative overflow-hidden bg-bgColor px-14  w-fit rounded-lg py-5 items-center justify-center text-2xl text-[#677277]">
				<BsImageFill size={25} className="mr-4" color="#3ca8e8" />
				Image
				<input
					className="cursor-pointer absolute top-0 right-0 block  opacity-0 w-full h-full"
					type="file"
					accept=".jpg,.jpeg,.png"
					name="photoUpload"
					id="photoUpload"
					onInput={(e) => {
						addMedia(e.target.files);
					}}
				/>
			</span>
			<p className="text-secondaryColor text-sm">Add up to 3 photos.</p>
			<div className="flex flex-row flex-wrap items-start w-full h-full  gap-2">
				{media.map((media) => (
					<div className="relative">
						<BsTrashFill
							className="absolute right-2 top-2 cursor-pointer text-red-500"
							size={30}
							onClick={() => {
								removeMedia(media);
							}}
						/>
						<img
							onClick={() => {
								setPreviewMedia(media.previewSrc);
							}}
							className="2xl:w-64 2xl:h-64 w-40 h-40 rounded-lg cursor-pointer"
							src={media.previewSrc}
							alt=""
						/>
					</div>
				))}
			</div>
		</div>
	);
}
