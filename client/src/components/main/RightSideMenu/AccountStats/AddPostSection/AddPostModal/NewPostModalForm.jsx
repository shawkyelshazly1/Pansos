import React, { useContext, useState } from "react";
import { BsImageFill } from "react-icons/bs";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { useMutation } from "@apollo/client";
import { ADD_POST } from "../../../../../../graphql/post/mutation";
import {
	LOAD_GROUP_POSTS,
	LOAD_NEWSFEED,
} from "../../../../../../graphql/post/query";
import toast from "react-hot-toast";
import MediaPreviewContainer from "./MediaPreviewContainer";
import { getUploadaedMediaUrls } from "../../../../../../utils";
import { useLocation } from "react-router";
import { CurrentAppContext } from "../../../../../../contexts/AppContext";

export default function NewPostModalForm({ setCurrentStatus }) {
	const { selectedGroup } = useContext(CurrentAppContext);

	// formdata this.state
	const [formData, setFormData] = useState({ content: "" });

	// media mains tates
	const [media, setMedia] = useState([]);

	// handle input change
	const handleInputChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	// add post mutation
	const [addPost] = useMutation(ADD_POST, {
		onError: (_) => {
			console.log(_);
			toast.error("Something Went Wrong!");
		},
		onCompleted: (_) => {
			setCurrentStatus("completed");
		},
		update: (cache, { data }) => {
			cache.modify({
				fields: {
					getUserNewsfeed(existingPosts = []) {
						const { addPost } = data;
						cache.writeQuery({
							query: LOAD_NEWSFEED,
							data: { addPost, existingPosts },
						});
					},
				},
			});
		},
	});

	// add post mutation for groups
	const [addGroupPost] = useMutation(ADD_POST, {
		onError: (_) => {
			console.log(_);
			toast.error("Something Went Wrong!");
		},
		onCompleted: (_) => {
			setCurrentStatus("completed");
		},
		update: (cache, { data }) => {
			cache.modify({
				fields: {
					loadGroupPosts(existingPosts = []) {
						const { addPost } = data;
						cache.writeQuery({
							query: LOAD_GROUP_POSTS,
							data: { addPost, existingPosts },
						});
					},
				},
			});
		},
	});

	// handle form submission
	const handleFormSubmission = async (e) => {
		e.preventDefault();
		setCurrentStatus("loading");

		if (media.length > 0) {
			await getUploadaedMediaUrls(media).then((res) => {
				selectedGroup !== ""
					? addGroupPost({
							variables: {
								content: formData.content,
								media: res,
								group: selectedGroup.id,
							},
					  })
					: addPost({ variables: { content: formData.content, media: res } });
			});
		} else {
			selectedGroup !== ""
				? addGroupPost({
						variables: { content: formData.content, group: selectedGroup.id },
				  })
				: addPost({ variables: { content: formData.content } });
		}
	};

	// add selected media to media & mediaPreviews
	const addMedia = (files) => {
		let updatedMedia = [];
		[...files].forEach((file) => {
			if (file) {
				let previewSrc = URL.createObjectURL(file);
				updatedMedia.push({ file, previewSrc });
			}
		});

		setMedia([...media, ...updatedMedia]);
	};

	// remoev selected media from media & mediaPreviews
	const removeMedia = (file) => {
		let updatedMedia = [...media];
		updatedMedia = updatedMedia.filter((media) => media !== file);
		setMedia(updatedMedia);
	};

	return (
		<div className="flex flex-col gap-4">
			<form
				target=""
				className="flex flex-col gap-4"
				onSubmit={handleFormSubmission}
				encType="multipart/form-data"
			>
				<textarea
					required
					name="content"
					id="content"
					rows="2"
					onChange={handleInputChange}
					className="focus:outline-none rounded-lg bg-bgColor px-4 py-4 resize-none"
					placeholder="What do you think, Shawky ?"
				></textarea>
				<hr />
				<div className=" flex flex-row justify-between gap-6">
					<span className="cursor-pointer flex relative overflow-hidden bg-bgColor  w-full rounded-lg py-[10px] items-center justify-center text-xl text-[#92a1a8]">
						<BsImageFill size={25} className="mr-4" color="#3ca8e8" />
						Image
						<input
							className="cursor-pointer absolute top-0 right-0 block  opacity-0 w-full h-full"
							type="file"
							accept=".jpg,.jpeg,.png"
							name="photoUpload"
							id="photoUpload"
							multiple
							onInput={(e) => {
								addMedia(e.target.files);
							}}
						/>
					</span>
					<span className="cursor-pointer flex relative overflow-hidden bg-bgColor  w-full rounded-lg py-[10px] items-center justify-center text-xl text-[#92a1a8]">
						<MdOutlineOndemandVideo
							size={25}
							className="mr-4"
							color="#e84c88"
						/>
						Video/GIF
						<input
							className="cursor-pointer absolute top-0 right-0 block  opacity-0"
							type="file"
							accept=".gif,.mp4,.mov,.mkv,.avi,.mpeg,.wmv"
							name="photoUpload"
							id="photoUpload"
							multiple
							onInput={(e) => {
								addMedia(e.target.files);
							}}
						/>
					</span>
				</div>
				<button
					type="submit"
					className="w-full text-white bg-[#fd8e5e] py-[6px] rounded-lg text-2xl font-semibold "
				>
					Post
				</button>
			</form>
			<MediaPreviewContainer media={media} removeMedia={removeMedia} />
		</div>
	);
}
