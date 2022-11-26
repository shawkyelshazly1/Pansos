import React, { useEffect, useState } from "react";
import { BsImageFill } from "react-icons/bs";
import { GrFormClose } from "react-icons/gr";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import MediaPreviewSection from "./MediaPreviewSection";
import LoadingSpinner from "../../../../utils/LoadingSpinner";
import { Player } from "@lottiefiles/react-lottie-player";

export default function AddStoryModal({ toggleModal, isOpened }) {
	const [media, setMedia] = useState([]);
	const [modalStatus, setModalStatus] = useState("idle");

	// useEffect to handle clicking ESC to close modal
	useEffect(() => {
		let e = document.addEventListener("keydown", (e) => {
			if (e.key === "Escape") {
				toggleModal(false);
			}
		});
	}, []);

	const setTimer = () => {
		const timer = setTimeout(() => {
			setModalStatus("idle");
			clearTimeout(timer);
			toggleModal(false);
		}, 1500);
	};

	return (
		<div
			className={`w-full h-full  items-center justify-center z-[999] ${
				isOpened ? "flex" : "hidden"
			}`}
		>
			<div
				onClick={(e) => {
					if (e.target.classList.contains("modal-overlay")) {
						toggleModal(!isOpened);
						setMedia([]);
					}
				}}
				className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-[999999] modal-overlay"
			>
				<div className="bg-white w-full h-full rounded-xl px-10 shadow-sm  relative flex flex-col gap-4 z-[9999]">
					<GrFormClose
						className="absolute right-2 top-2 cursor-pointer"
						size={70}
						onClick={() => {
							toggleModal(!isOpened);
							setMedia([]);
						}}
					/>
					{modalStatus === "idle" ? (
						<div className="flex flex-col gap-4 items-center">
							<h1 className="text-[#848fac] font-medium self-start">
								ADD NEW STORY
							</h1>

							<div className=" flex flex-row justify-between items-center w-full h-full">
								<MediaPreviewSection
									media={media}
									setMedia={setMedia}
									toggleModal={toggleModal}
									setModalStatus={setModalStatus}
								/>
								<div className="flex flex-1 justify-center items-center flex-col   w-full">
									<img
										src={media[0]?.previewSrc}
										alt=""
										className="w-[30rem] h-[100vh] object-cover rounded-xl border-[2rem] box-content border-black"
									/>
								</div>
							</div>
						</div>
					) : modalStatus === "loading" ? (
						<LoadingSpinner />
					) : (
						<>
							{setTimer()} (
							<Player
								autoplay
								loop
								speed={1.8}
								src="https://assets10.lottiefiles.com/packages/lf20_iuonzj99.json"
								style={{ height: "200px", width: "200px" }}
							></Player>
							)
						</>
					)}
				</div>
			</div>
			<div className="bg-gray-500 absolute opacity-50 top-0 left-0 w-full h-full"></div>
		</div>
	);
}
