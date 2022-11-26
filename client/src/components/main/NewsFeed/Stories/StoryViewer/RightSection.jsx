import React, { useEffect, useState } from "react";
import {
	BsFillArrowLeftCircleFill,
	BsFillArrowRightCircleFill,
} from "react-icons/bs";
import S from "underscore.string";
import Stories from "react-insta-stories";

export default function RightSection({ selectedStories }) {
	const [current, setcurrent] = useState(0);

	const switchStory = (variant) => {
		setcurrent(
			current + variant >= selectedStories.length || current + variant < 0
				? current
				: current + variant
		);
	};

	let stories = selectedStories?.map((story) => story.media.url);

	useEffect(() => {
		setcurrent(0);
		stories = selectedStories?.map((story) => story.media.url);
	}, [selectedStories]);

	if (selectedStories?.length === 0) return;

	return (
		<div className="flex flex-1 flex-row gap-1 bg-black h-full justify-center items-center w-full">
			<Stories stories={stories} width={432} height={768} />
		</div>
	);
}
