import { useMutation } from "@apollo/client";
import React from "react";
import toast from "react-hot-toast";
import { BsImageFill, BsTrashFill } from "react-icons/bs";
import { ADD_STORY } from "../../../../../graphql/story/mutation";
import { getUploadaedMediaUrls } from "../../../../../utils";

export default function MediaPreviewSection({
	media,
	setMedia,
	toggleModal,
	setModalStatus,
}) {
	// add selected media to media & mediaPreviews
	const addMedia = (files) => {
		let updatedMedia = [];
		console.log(files);
		if (files[0]) {
			let previewSrc = URL.createObjectURL(files[0]);
			updatedMedia.push({ file: files[0], previewSrc });
		}

		setMedia([...updatedMedia]);
	};

	// remove selected media from media & mediaPreviews
	const removeMedia = (file) => {
		document.querySelector(".file-upload").value = "";
		let updatedMedia = [...media];
		updatedMedia = updatedMedia.filter((media) => media !== file);
		setMedia(updatedMedia);
	};

	// add story Mutation

	const [addStory] = useMutation(ADD_STORY, {
		onError: (_) => {
			console.log(_);
			toast.error("Something Went Wrong!");
		},
		onCompleted: (_) => {
			setModalStatus("completed");
		},
	});

	return (
		<div className="flex flex-col flex-1 items-center gap-4">
			<span className="cursor-pointer flex relative overflow-hidden bg-bgColor px-14  w-fit rounded-lg py-5 items-center justify-center text-2xl text-[#677277]">
				<BsImageFill size={25} className="mr-4" color="#3ca8e8" />
				Image
				<input
					className="cursor-pointer absolute top-0 right-0 block  opacity-0 w-full h-full file-upload"
					type="file"
					accept=".jpg,.jpeg,.png"
					name="photoUpload"
					id="photoUpload"
					onInput={(e) => {
						addMedia(e.target.files);
					}}
				/>
			</span>
			<p className="text-secondaryColor text-sm">Allowed Only 1 Photo.</p>
			<button
				onClick={async () => {
					if (media.length > 0) {
						setModalStatus("loading");
						await getUploadaedMediaUrls(media).then((res) => {
							addStory({ variables: { media: res[0] } });
						});
					}
				}}
				className={`py-2 px-6  text-white text-2xl font-medium rounded-xl  ${
					media.length === 0
						? "bg-bgColor text-black opacity-40 cursor-not-allowed"
						: "bg-green-500"
				}`}
				disabled={media.length === 0 ? true : false}
			>
				Save & Upload
			</button>
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
