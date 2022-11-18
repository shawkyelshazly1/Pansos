import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { BsHouseDoorFill } from "react-icons/bs";

export default function IntroSection() {
	return (
		<div className="hidden lg:flex flex-col  gap-8 bg-white  px-8  rounded-xl shadow-postCardShadow py-6 h-fit lg:min-w-[35%] xl:min-w-[25%] ">
			<h1 className="text-2xl font-semibold">Intro</h1>
			<hr />
			<div className="flex flex-col gap-1">
				<p className="font-medium">About Me:</p>
				<p className="text-sm text-[#8091ac]">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto
					numquam dignissimos voluptas saepe unde, fugit perferendis dolorum
					quae delectus porro cum repellendus nihil esse repellat vitae ullam
					quos recusandae incidunt!
				</p>
			</div>
			<div className="flex flex-col gap-4">
				<div className="flex flex-row gap-3 items-center">
					<FaGraduationCap size={30} color={"#8091ac"} />
					<p className=" text-[#4c5767] font-medium">
						Studied at Saint Louis HighSchool
					</p>
				</div>
				<div className="flex flex-row gap-3 items-center">
					<MdWork size={30} color={"#8091ac"} />
					<p className=" text-[#4c5767] font-medium">
						Studied at Saint Louis HighSchool
					</p>
				</div>
				<div className="flex flex-row gap-3 items-center">
					<BsHouseDoorFill size={30} color={"#8091ac"} />
					<p className=" text-[#4c5767] font-medium">
						Studied at Saint Louis HighSchool
					</p>
				</div>
			</div>
		</div>
	);
}
