import React from "react";
import LoginForm from "../../components/auth/LoginForm";

export default function Login() {
	return (
		<div
			className="flex w-full items-center justify-center flex-col gap-8
	"
		>
			<div className="flex flex-col gap-2 items-center ">
				<h1 className="font-lobster text-mainColor text-8xl">Pansos.</h1>
				<p className="text-xl text-secondaryColor">
					Feel the Social experience
				</p>
			</div>
			<LoginForm />
		</div>
	);
}
