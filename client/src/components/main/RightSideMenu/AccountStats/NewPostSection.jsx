import React, { useState } from "react";

import { Player } from "@lottiefiles/react-lottie-player";
import NewPostForm from "./NewPostForm";

export default function NewPostSection() {
	// status for posting animation
	const [currentStatus, setCurrentStatus] = useState("idle");

	if (currentStatus === "idle")
		return <NewPostForm setCurrentStatus={setCurrentStatus} />;
	else if (currentStatus === "completed") {
		const timer = setTimeout(() => {
			setCurrentStatus("idle");
			clearTimeout(timer);
		}, 3000);
		return (
			<Player
				autoplay
				loop
				src="https://assets10.lottiefiles.com/packages/lf20_iuonzj99.json"
				style={{ height: "200px", width: "200px" }}
			></Player>
		);
	}
}
