import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { REGISTER_USER } from "../../graphql/user/mutation";
import FormInput from "./FormInput";

export default function RegisterForm() {
	//navigate hook
	const navigate = useNavigate();

	//form state
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
		confirmPassword: "",
	});

	// handle inputChange
	const stateChangeHandler = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	// register mutation
	const [registerUser, { data, loading }] = useMutation(REGISTER_USER, {
		onError: (error) => {
			toast.error(error.message, {
				position: "bottom-center",
			});
		},
		onCompleted: (_) => {
			toast.success("Registered Successfully!");
			navigate("/login");
		},
	});

	// submit form handler
	const submitFormHandler = (e) => {
		e.preventDefault();
		registerUser({ variables: { ...formData } });
	};

	return (
		<form
			className="flex flex-col gap-3  min-w-[20%]"
			onSubmit={submitFormHandler}
		>
			<div className="flex flex-row gap-4  items-center justify-center">
				<FormInput
					type={"text"}
					name={"firstName"}
					isRequired={true}
					placeholder={"First Name"}
					value={formData.firstName}
					onChangeHandler={stateChangeHandler}
				/>
				<FormInput
					type={"text"}
					name={"lastName"}
					isRequired={true}
					placeholder={"Last Name"}
					value={formData.lastName}
					onChangeHandler={stateChangeHandler}
				/>
			</div>
			<FormInput
				type={"email"}
				name={"email"}
				isRequired={true}
				placeholder={"Email"}
				value={formData.email}
				onChangeHandler={stateChangeHandler}
			/>
			<FormInput
				type={"password"}
				name={"password"}
				isRequired={true}
				placeholder={"Password"}
				value={formData.password}
				onChangeHandler={stateChangeHandler}
			/>
			<FormInput
				type={"password"}
				name={"confirmPassword"}
				isRequired={true}
				placeholder={"Confirm Password"}
				value={formData.confirmPassword}
				onChangeHandler={stateChangeHandler}
			/>

			<button
				type="submit"
				className="text-white font-semibold py-2 rounded-lg bg-mainColor mt-8"
			>
				Register
			</button>
			<p className="text-sm text-gray-400">
				Already have an account?{" "}
				<Link to={"/"} className="font-semibold text-mainColor">
					{" "}
					Login
				</Link>
			</p>
		</form>
	);
}
