import React from "react";

export default function FormInput({
	type,
	isRequired,
	name,
	placeholder,
	onChangeHandler,
	value,
}) {
	return (
		<input
			type={type}
			name={name}
			placeholder={placeholder}
			required={isRequired}
			className="focus:outline-none border-b-2 px-2 py-1 border-secondaryColor focus:border-mainColor"
			onChange={(e) => {
				onChangeHandler(e);
			}}
			value={value}
		/>
	);
}
