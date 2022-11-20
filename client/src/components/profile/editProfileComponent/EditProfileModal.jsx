import React from "react";
import { GrFormClose } from "react-icons/gr";
import EditProfileForm from "./EditProfileForm";

export default function EditProfileModal({ isOpened, toggleModal, user }) {
	return (
		<div
			className={` ${
				!isOpened ? "hidden" : ""
			} w-full h-full items-center flex justify-center z-[999]`}
		>
			<div
				onClick={(e) => {
					if (e.target.classList.contains("modal-overlay"))
						toggleModal(!isOpened);
				}}
				className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-[999] modal-overlay"
			>
				<div className="bg-white xl:w-2/4 h-2/4 w-4/5 xl:h-4/5 rounded-xl px-10 py-6 shadow-sm  relative flex flex-col gap-4">
					<GrFormClose
						className="absolute right-2 top-2 cursor-pointer"
						size={30}
						onClick={() => {
							toggleModal(!isOpened);
						}}
					/>
					<div className="flex flex-col gap-4 items-center">
						<h1 className="text-[#848fac] font-medium self-start mb-2 text-xl">
							EDIT PROFILE INFO
						</h1>
						<EditProfileForm user={user} toggleModal={toggleModal} />
					</div>
				</div>
			</div>
			<div className="bg-gray-500 absolute opacity-50 top-0 left-0 w-full h-full"></div>
		</div>
	);
}
