import React, { useContext, useEffect, useState } from "react";
import { AiFillHome, AiFillMessage } from "react-icons/ai";
import { FaCompass } from "react-icons/fa";
import { TiGroup } from "react-icons/ti";
import { Link, useLocation } from "react-router-dom";
import { ChatAppContext } from "../../contexts/ChatContext";

export default function NavbarIcons() {
	const { unreadConversationsCount } = useContext(ChatAppContext);

	const location = useLocation();

	// selected state
	const [selectedIcon, setSelectedIcon] = useState("home");

	useEffect(() => {
		switch (location.pathname.split("/")[1]) {
			case "":
				setSelectedIcon("home");
				break;
			case "message":
				setSelectedIcon("message");
				break;
			case "group":
				setSelectedIcon("group");
				break;
			case "profile":
			case "search":
			case "explore":
				setSelectedIcon("profile");
				break;

			default:
				setSelectedIcon("");
				break;
		}
	}, [location]);

	return (
		<div className="flex flex-row gap-6 items-center nav-icons">
			<span
				className={`p-1 ${
					selectedIcon === "home" ? "bg-mainColor " : ""
				}  rounded-lg cursor-pointer`}
			>
				<Link to={"/"}>
					<AiFillHome
						size={30}
						className={` ${
							selectedIcon === "home" ? "text-white" : "text-secondaryColor"
						} `}
					/>
				</Link>
			</span>
			<span
				className={`p-1 ${
					selectedIcon === "profile" ? "bg-mainColor " : ""
				}  rounded-lg cursor-pointer`}
			>
				<Link to={"/explore"}>
					<FaCompass
						size={30}
						className={` ${
							selectedIcon === "profile" ? "text-white" : "text-secondaryColor"
						} `}
					/>
				</Link>
			</span>
			<span
				className={`p-1 ${
					selectedIcon === "message" ? "bg-mainColor " : ""
				}  rounded-lg cursor-pointer relative`}
			>
				<Link to={"/message"}>
					<AiFillMessage
						size={30}
						className={` ${
							selectedIcon === "message" ? "text-white" : "text-secondaryColor"
						} `}
					/>
				</Link>
				{unreadConversationsCount && selectedIcon === "message" ? (
					<span className="absolute top-[-8px] font-medium right-[-8px] rounded-full bg-[#c5d0e6] text-white w-5 h-5 text-sm flex items-center justify-center">
						{unreadConversationsCount}
					</span>
				) : unreadConversationsCount && selectedIcon !== "message" ? (
					<span className="absolute top-[-4px] font-medium right-[-4px] rounded-full bg-mainColor text-white w-5 h-5 text-sm flex items-center justify-center">
						{unreadConversationsCount}
					</span>
				) : (
					<></>
				)}
			</span>
			<span
				className={`p-1 ${
					selectedIcon === "group" ? "bg-mainColor " : ""
				}  rounded-lg cursor-pointer`}
			>
				<Link to={"/group"}>
					<TiGroup
						size={30}
						className={` ${
							selectedIcon === "group" ? "text-white" : "text-secondaryColor"
						} `}
					/>
				</Link>
			</span>
		</div>
	);
}
