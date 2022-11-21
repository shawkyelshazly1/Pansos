import { useApolloClient, useQuery } from "@apollo/client";
import React, { useContext, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { CurrentAppContext } from "../../../../../contexts/AppContext";
import {
	LOAD_NEWSFEED,
	LOAD_POST,
	LOAD_USER_POSTS,
} from "../../../../../graphql/post/query";
import PostModalInfo from "./PostModalInfo";
import PostModaMediaViewer from "./PostModaMediaViewer";

export default function PostModal({ isOpened, toggleModal }) {
	const location = useLocation();

	const { selectedPost } = useContext(CurrentAppContext);

	// useEffect to handle clicking ESC to close modal
	useEffect(() => {
		let e = document.addEventListener("keydown", (e) => {
			if (e.key === "Escape") {
				toggleModal(false);
			}
		});
	}, []);

	let post;

	let currentPath = location.pathname.split("/")[1];
	if (currentPath === "") {
		const { data } = useQuery(LOAD_NEWSFEED, {
			fetchPolicy: "cache-only",
		});
		post = data.getUserNewsfeed.filter((post) => post.id === selectedPost)[0];
	} else if (currentPath === "profile") {
		const { data } = useQuery(LOAD_USER_POSTS, {
			variables: { userId: location.pathname.split("/")[2] },
			fetchPolicy: "cache-only",
		});
		post = data.getUserPosts.filter((post) => post.id === selectedPost)[0];
	}

	if (!post) return;
	return (
		<div
			className={` ${
				!isOpened ? "hidden" : ""
			}  w-full h-full  items-center flex justify-center z-[9999]`}
		>
			<div
				className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-[999] modal-overlay"
				onClick={(e) => {
					if (e.target.classList.contains("modal-overlay"))
						toggleModal(!isOpened);
				}}
			>
				<div className=" w-full h-full rounded-xl shadow-sm  relative flex flex-col lg:flex-row">
					<IoClose
						className="absolute left-2 top-2 cursor-pointer font-bold text-white "
						size={40}
						onClick={() => {
							toggleModal(false);
						}}
					/>
					<Link
						to={"/"}
						onClick={() => {
							toggleModal(false);
						}}
					>
						<h1 className="text-mainColor text-3xl font-lobster font-semibold  absolute left-14 top-2">
							Pansos
							<strong className="text-black font-roboto font-extrabold text-4xl">
								.
							</strong>
						</h1>
					</Link>
					<PostModaMediaViewer post={post} />
					<PostModalInfo post={post} />
				</div>
			</div>
			<div className="bg-gray-500 absolute opacity-50 top-0 left-0 w-full h-full"></div>
		</div>
	);
}
