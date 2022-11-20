import { useState } from "react";
import EditProfileModal from "./EditProfileModal";
import HeaderMenu from "./HeaderMenu";

export default function ProfileHeader({ loadedUser }) {
	const [showModal, setShowModal] = useState(false);

	return (
		<div className=" w-[90%] flex flex-col gap-4 bg-white  px-8  rounded-xl shadow-postCardShadow py-6  ">
			<div className="relative items-center flex justify-center w-full ">
				<img
					className=" object-cover  rounded-xl w-full min-h-[200px] max-h-[350px]"
					src={loadedUser.profileCover}
					alt=""
				/>
				<div className="absolute bottom-[-2rem]  border-4 rounded-full border-white">
					<img
						className="rounded-full w-24 h-24 lg:w-36 lg:h-36 object-cover"
						src={loadedUser.profileImage}
						alt=""
					/>
				</div>
			</div>
			<HeaderMenu loadedUser={loadedUser} toggleModal={setShowModal} />
			<EditProfileModal
				isOpened={showModal}
				toggleModal={setShowModal}
				user={loadedUser}
			/>
		</div>
	);
}
