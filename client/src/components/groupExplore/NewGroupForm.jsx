import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import { ADD_GROUP } from "../../graphql/group/mutation";
import FormInput from "../auth/FormInput";

export default function NewGroupForm() {
	const navigate = useNavigate();
	const [formData, setFormData] = useState({ name: "", groupType: "public" });

	// state inputs chane handler
	const stateChangeHandler = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	// handle form submission
	const handleFormSubmission = (e) => {
		e.preventDefault();
		addGroup();
	};

	// add group mutation
	const [addGroup] = useMutation(ADD_GROUP, {
		variables: { ...formData },
		onError: (error) => {
			toast.error(error.message);
		},
		onCompleted: ({ addGroup }) => {
			toast.success("Group Created Successfully!");
			setFormData({ name: "", groupType: "public" });
			navigate(`/group/${addGroup.id}`);
		},
	});

	return (
		<form
			action=""
			onSubmit={handleFormSubmission}
			className="w-full items-center flex flex-col gap-6"
		>
			<img
				src="https://i.postimg.cc/9Mj9yQgY/jonespeace-1.webp"
				alt=""
				className="w-28 h-28 rounded-lg"
			/>
			<FormInput
				type={"text"}
				name={"name"}
				isRequired={true}
				placeholder={"Group Name"}
				value={formData.name}
				onChangeHandler={stateChangeHandler}
			/>
			<div className="flex flex-row gap-2 items-center justify-center">
				<label htmlFor="groupType">Group Type:</label>
				<select
					onChange={stateChangeHandler}
					name="groupType"
					id="groupType"
					value={formData.groupType}
					className="py-2 px-4 focus:outline-none border-[1px] border-secondaryColor rounded-lg focus:border-mainColor"
				>
					<option value="public" className="py-1 px-2">
						Public
					</option>
					<option value="private" className="py-1 px-2">
						Private
					</option>
				</select>
			</div>
			<button className="py-2 px-4 rounded-xl font-medium text-white bg-blue-500">
				Create Group
			</button>
		</form>
	);
}
