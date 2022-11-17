import React, { useState } from "react";
import { Link } from "react-router-dom";
import FormInput from "./FormInput";

export default function LoginForm() {
	//form state
	const [formData, setFormData] = useState({ email: "", password: "" });

	// handle inputChange
	const stateChangeHandler = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	return (
		<form className="flex flex-col gap-3  min-w-[20%]">
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

			<button
				type="submit"
				className="text-white font-semibold py-2 rounded-lg bg-mainColor mt-8"
			>
				Login
			</button>
			<p className="text-sm text-gray-400">
				Don't have an account?{" "}
				<Link to={"/register"} className="font-semibold text-mainColor">
					{" "}
					Register Now
				</Link>
			</p>
		</form>
	);
}
