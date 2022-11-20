
import React, { useState } from "react";
import { useParams } from "react-router";
import Header from "./Header";
import FollowersSection from "./usersComponentVariants/FollowersSection";
import FollowingsSection from "./usersComponentVariants/FollowingsSection";
import RequestsSection from "./usersComponentVariants/RequestsSection";

export default function Friends() {
	const [selectedComponent, setSelecetedCmponent] = useState("followers");
	

	return (
		<div className=" w-[90%] flex flex-col gap-6  bg-white py-6 px-6 rounded-xl shadow-postCardShadow">
			<Header
				setSelecetedCmponent={setSelecetedCmponent}
				selectedComponent={selectedComponent}
			/>
			<hr />

			{selectedComponent === "followers" ? (
				<FollowersSection selectedComponent={selectedComponent} />
			) : selectedComponent === "followings" ? (
				<FollowingsSection selectedComponent={selectedComponent} />
			) : selectedComponent === "requests" ? (
				<RequestsSection selectedComponent={selectedComponent} />
			) : (
				<></>
			)}
		</div>
	);
}
