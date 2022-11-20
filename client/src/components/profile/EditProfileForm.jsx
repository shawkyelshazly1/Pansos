import { useMutation } from "@apollo/client";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaEdit } from "react-icons/fa";
import S from "underscore.string";
import { UPDATE_PROFILE_INFO } from "../../graphql/user/mutation";

export default function EditProfileForm({ user, toggleModal }) {
	// main form state
	const [formData, setFormData] = useState({
		firstName: user.firstName,
		lastName: user.lastName,
	});

	// update profile mutation
	const [updateProfile] = useMutation(UPDATE_PROFILE_INFO, {
		variables: { ...formData },
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
	const handleFormSubmission = (e) => {
		e.preventDefault();
		if (formData.firstName !== "" && formData.lastName !== "") {
			updateProfile();
		}
	};

	return (
		<form
			onSubmit={handleFormSubmission}
			action=""
			className="flex flex-col w-full items-center gap-8"
		>
			<div className="w-40 border-4 border-mainColor rounded-full relative">
				<img
					className="rounded-full"
					src="https://i.postimg.cc/9Mj9yQgY/jonespeace-1.webp"
					alt=""
				/>
				{/*  #TODO: add functionality to update photo */}
				<FaEdit
					className="absolute right-1 text-black bottom-1 cursor-pointer"
					size={25}
				/>
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
