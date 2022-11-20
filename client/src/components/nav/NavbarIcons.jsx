import React, { useEffect, useState } from "react";
import { AiFillHome, AiFillMessage } from "react-icons/ai";
import { FaCompass } from "react-icons/fa";
import { TiGroup } from "react-icons/ti";
import { Link, useLocation } from "react-router-dom";

export default function NavbarIcons() {
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
		<div className="flex flex-row gap-6 items-center">
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
				}  rounded-lg cursor-pointer`}
			>
				<Link to={"/message"}>
					<AiFillMessage
						size={30}
						className={` ${
							selectedIcon === "message" ? "text-white" : "text-secondaryColor"
						} `}
					/>
				</Link>
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
