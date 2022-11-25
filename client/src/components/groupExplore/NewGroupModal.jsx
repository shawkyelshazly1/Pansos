import React from "react";
import { GrFormClose } from "react-icons/gr";
import NewGroupForm from "./NewGroupForm";

export default function NewGroupModal({ toggleModal, isOpened }) {
	return (
		<div
			className={`w-full h-full  items-center justify-center z-[999] ${
				isOpened ? "flex" : "hidden"
			}`}
		>
			<div
				onClick={(e) => {
					if (e.target.classList.contains("modal-overlay"))
						toggleModal(!isOpened);
				}}
				className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-[999] modal-overlay"
			>
				<div className="bg-white xl:w-1/4  min-h-[40%] max-h-fit w-3/5  rounded-xl px-10 py-6 shadow-sm  relative flex flex-col gap-4">
					<GrFormClose
						className="absolute right-2 top-2 cursor-pointer"
						size={30}
						onClick={() => {
							toggleModal(!isOpened);
						}}
					/>
					<div className="flex flex-col gap-4 items-center">
						<h1 className="text-[#848fac] font-medium self-start mb-2">
							CREATE NEW GROUP
						</h1>

						<div className="w-full h-full">
							<NewGroupForm />
						</div>
					</div>
				</div>
			</div>
			<div className="bg-gray-500 absolute opacity-50 top-0 left-0 w-full h-full"></div>
		</div>
	);
}
