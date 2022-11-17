import React from "react";
import RegisterForm from "../../components/auth/RegisterForm";

export default function Register() {
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
			<RegisterForm />
		</div>
	);
}
