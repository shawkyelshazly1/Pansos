import React, { useContext } from "react";
import { currentUserContext } from "../../../../contexts/CurrentUserContext";
import { IoMdAddCircle } from "react-icons/io";

export default function UserStoryCircle({ toggleModal }) {
	const { currentUser } = useContext(currentUserContext);

	return (
		<div
			onClick={() => {
				toggleModal(true);
			}}
			className="border-2 border-[#c23100] rounded-full p-[2px] shrink-0 cursor-pointer relative"
		>
			<img
				className="rounded-full object-cover w-20 h-20"
				src={currentUser.profileImage.url}
				alt=""
			/>
			<IoMdAddCircle
				className="absolute bottom-0 right-0 text-mainColor bg-white rounded-full border-0"
				size={30}
			/>
		</div>
	);
}
