import { Menu } from "@headlessui/react";
import React from "react";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function CommentCard() {
	return (
		<>
			<div className="flex flex-row gap-2 relative">
				<Link to={"/profile/1223456"}>
					<div className="w-14 h-14">
						<img
							className="w-14 h-14 rounded-xl object-cover "
							src="https://i.postimg.cc/x80sFWLz/download-1.jpg"
							alt=""
						/>
					</div>
				</Link>
				<div className="flex flex-col gap-1">
					<h1 className="font-semibold text-[#192252]">Shawky Ahmed</h1>
					<p className="text-[#848fac]">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam aut
						pariatur ipsa magnam excepturi dolore autem, debitis facilis et
						enim, voluptatibus blanditiis commodi adipisci. Voluptates eaque
						temporibus tempore consequuntur il Lorem ipsum dolor sit amet
						consectetur adipisicing elit. Voluptatem modi illo labore
						consequuntur eaque, dolorum aut saepe similique distinctio soluta
						iste maxime voluptatum quo autem voluptates nulla esse nihil
						commodi.
					</p>
				</div>
				<Menu as="div" className="  inline-block relative  text-left z-[999]">
					<Menu.Button className=" ">
						<div className="flex flex-row gap-4 cursor-pointer">
							<BiDotsHorizontalRounded size={25} />
						</div>
					</Menu.Button>
					<Menu.Items className="absolute flex text-lg font-medium flex-col w-fit py-2 px-4 right-0  origin-top-right bg-white rounded-md shadow-lg ">
						<Menu.Item>
							{({ active }) => (
								<Link className={`${active && "text-red-500"}`} to={"/"}>
									Delete
								</Link>
							)}
						</Menu.Item>
					</Menu.Items>
				</Menu>
			</div>
			<hr />
		</>
	);
}
