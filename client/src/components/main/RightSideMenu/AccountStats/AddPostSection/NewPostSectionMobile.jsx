import React, { useState } from "react";

import { Player } from "@lottiefiles/react-lottie-player";
import NewPostForm from "./NewPostForm";

export default function NewPostSectionMobile() {
	// status for posting animation
	const [currentStatus, setCurrentStatus] = useState("idle");

	return (
		<div className="w-full flex  justify-center flex-col">
			{currentStatus === "idle" ? (
				<NewPostForm setCurrentStatus={setCurrentStatus} />
			) : (
				<></>
			)}
		</div>
	);

}
