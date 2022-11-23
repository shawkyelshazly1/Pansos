import { useMutation } from "@apollo/client";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaEdit } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";
import S from "underscore.string";
import { UPDATE_PROFILE_INFO } from "../../../graphql/user/mutation";
import { getUploadaedMediaUrls } from "../../../utils";
import LoadingCircleSpinner from "../../utils/LoadingCircleSpinner";

export default function EditProfileForm({ user, toggleModal }) {
	// main form state
	const [formData, setFormData] = useState({
		firstName: user.firstName,
		lastName: user.lastName,
	});

	const [media, setMedia] = useState(null);
	const [uploadingMedia, setUploadingMedia] = useState(false);

	// update profile mutation
	const [updateProfile, { loading }] = useMutation(UPDATE_PROFILE_INFO, {
		onError: (error) => {
			toast.error(error.message);
		},
		onCompleted: (_) => {
			toast.success("Profile Updated Successfully.");
			toggleModal(false);
		},
	});

	//handle input chagne
	const handleInputChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value.trim() });
	};

	// handle form Submission
	const handleFormSubmission = async (e) => {
		e.preventDefault();
		if (formData.firstName !== "" && formData.lastName !== "") {
			if (media?.file) {
				setUploadingMedia(true);
				await getUploadaedMediaUrls([media]).then((res) => {
					updateProfile({ variables: { ...formData, profileImage: res[0] } });
				});
			} else {
				updateProfile({ variables: { ...formData } });
			}
			setUploadingMedia(false);
			setMedia({});
		}
	};

	const addMediaAndPreview = (file) => {
		let previewSrc = URL.createObjectURL(file);
		setMedia({ file, previewSrc });
	};

	if (loading || uploadingMedia) return <LoadingCircleSpinner />;
	return (
		<form
			onSubmit={handleFormSubmission}
			action=""
			className="flex flex-col w-full items-center gap-8"
		>
			<div className=" border-4 border-mainColor rounded-full relative">
				<div className="relative">
					{media?.previewSrc ? (
						<IoIosCloseCircle
							onClick={() => {
								setMedia(null);
							}}
							className="absolute right-1 top-2 cursor-pointer"
							size={30}
						/>
					) : (
						<></>
					)}
					<img
						className="rounded-full object-cover w-40 h-40"
						src={media?.previewSrc || user.profileImage}
						alt=""
					/>
				</div>

				<span className="cursor-pointer flex absolute bottom-1 right-2 overflow-hidden items-center justify-center w-fit">
					<FaEdit className=" text-black cursor-pointer" size={25} />

					<input
						className="cursor-pointer absolute top-0 right-0 block opacity-0"
						type="file"
						accept=".jpg,.jpeg,.png"
						name="photoUpload"
						id="photoUpload"
						onInput={(e) => {
							addMediaAndPreview(e.target.files[0]);
						}}
					/>
				</span>
			</div>
			<div className="flex flex-row justify-between w-full gap-8">
				<div className="flex flex-col w-full gap-1">
					<label className="text-[#565d72] font-bold ml" htmlFor="firstName">
						First Name
					</label>
					<input
						className="focus:outline-none bg-bgColor rounded-lg py-3 px-4"
						type="text"
						name="firstName"
						onChange={handleInputChange}
						required
						value={S(formData.firstName).capitalize().value()}
					/>
				</div>
				<div className="flex flex-col w-full gap-1">
					<label className="text-[#565d72] font-bold" htmlFor="lastName">
						Last Name
					</label>
					<input
						className="focus:outline-none bg-bgColor rounded-lg py-3 px-4"
						type="text"
						name="lastName"
						onChange={handleInputChange}
						required
						value={S(formData.lastName).capitalize().value()}
					/>
				</div>
			</div>
			<div className="flex flex-col w-full gap-1">
				<label className="text-[#565d72] font-bold" htmlFor="lastName">
					Email
				</label>
				<input
					className="focus:outline-none bg-bgColor rounded-lg py-3 px-4 text-slate-500"
					type="text"
					name="email"
					disabled
					value={user.email}
				/>
			</div>
			<button className="bg-[#3a8dc1] text-white  font-medium py-2 px-4 rounded-xl text-2xl">
				Save
			</button>
		</form>
	);
}
