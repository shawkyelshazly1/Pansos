import React, { useContext } from "react";
import { useParams } from "react-router";
import { currentUserContext } from "../../../../contexts/CurrentUserContext";

export default function Header({ setSelecetedCmponent, selectedComponent }) {
	const { userId } = useParams();
	const { currentUser } = useContext(currentUserContext);
	return (
		<div className="flex flex-row gap-10">
			<span
				className={`font-semibold cursor-pointer   ${
					selectedComponent === "followers"
						? "text-mainColor"
						: "text-[#8091ac]"
				}`}
				onClick={() => {
					setSelecetedCmponent("followers");
				}}
			>
				Followers
			</span>
			{currentUser.id === userId ? (
				<>
					<span
						className={`font-semibold cursor-pointer   ${
							selectedComponent === "followings"
								? "text-mainColor"
								: "text-[#8091ac]"
						}`}
						onClick={() => {
							setSelecetedCmponent("followings");
						}}
					>
						Followings
					</span>
					<span
						className={`font-semibold cursor-pointer   ${
							selectedComponent === "requests"
								? "text-mainColor"
								: "text-[#8091ac]"
						}`}
						onClick={() => {
							setSelecetedCmponent("requests");
						}}
					>
						Pending Requests
					</span>
				</>
			) : (
				<></>
			)}
		</div>
	);
}
