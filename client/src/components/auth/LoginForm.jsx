import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FormInput from "./FormInput";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../../graphql/user/mutation";
import toast from "react-hot-toast";
import LoadingSpinner from "../utils/LoadingSpinner";
import { currentUserContext } from "../../contexts/CurrentUserContext";

export default function LoginForm() {
	//navigate hook
	const navigate = useNavigate();

	// useContext
	const { setCurrentUser } = useContext(currentUserContext);

	//form state
	const [formData, setFormData] = useState({ email: "", password: "" });

	// login Mutaion
	const [loginuser, { data, loading, error }] = useMutation(LOGIN_USER, {
		onError: (error) => {
			toast.error(error.message, {
				position: "bottom-center",
			});
		},
		onCompleted: ({ loginUser }) => {
			localStorage.setItem("accessToken", loginUser.accessToken);
			setCurrentUser(loginUser.user);
			toast.success("Logged In!");
			navigate("/");
		},
	});

	// handle inputChange
	const stateChangeHandler = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	// submitForm handler
	const submitFormHandler = (e) => {
		e.preventDefault();
		loginuser({ variables: { ...formData } });
	};

	// if (loading) return <LoadingSpinner />;
	return (
		<form
			className="flex flex-col gap-3  min-w-[20%]"
			onSubmit={submitFormHandler}
		>
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
